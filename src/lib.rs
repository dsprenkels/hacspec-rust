//!
//! hacspec Rust library.
//!
extern crate rand;

use std::convert::AsMut;
use std::ops::{Index, IndexMut, Range, RangeFull};

#[macro_export]
macro_rules! hacspec_imports {
    () => {
        use std::ops::{Index, IndexMut, Range, RangeFull};
    };
}

#[macro_export]
macro_rules! random_bytes {
    ($n:ident, $l:expr) => {
        let mut $n = [0u8; $l];
        $n.copy_from_slice(&get_random_bytes($l)[..$l]);
    };
}

pub fn get_random_bytes(l: usize) -> Vec<u8> {
    (0..l).map(|_| rand::random::<u8>()).collect()
}

pub fn to_u32l(x: &[u8]) -> u32 {
    assert!(x.len() == 4);
    u32::from_le_bytes(to_array(&x[0..4]))
}

pub fn from_u32l(x: u32) -> (u8, u8, u8, u8) {
    (
        ((x & 0xFF000000) >> 24) as u8,
        ((x & 0xFF0000) >> 16) as u8,
        ((x & 0xFF00) >> 8) as u8,
        (x & 0xFF) as u8,
    )
}

/// Variable length byte arrays.
#[derive(Debug, Clone, PartialEq, Default)]
pub struct Bytes {
    b: Vec<u8>,
}

impl Bytes {
    pub fn new_len(l: usize) -> Self {
        Self {
            b: vec![0u8; l],
        }
    }
    pub fn random(l: usize) -> Self {
        Self {
            b: get_random_bytes(l),
        }
    }
    pub fn from_vec(v: Vec<u8>) -> Self {
        Self {
            b: v.clone(),
        }
    }
    pub fn len(&self) -> usize {
        self.b.len()
    }
    /// Get bytes as u32.
    /// # PANICS
    /// Panics if self.len() != 4.
    pub fn to_u32l(&self) -> u32 {
        assert!(self.b.len() == 4);
        (self.b[3] as u32) << 24
            | (self.b[2] as u32) << 16
            | (self.b[1] as u32) << 8
            | (self.b[0] as u32)
    }
    /// Read a u32 into a byte array.
    pub fn from_u32l(x: u32) -> Self {
        Bytes {
            b: vec![
                ((x & 0xFF000000) >> 24) as u8,
                ((x & 0xFF0000) >> 16) as u8,
                ((x & 0xFF00) >> 8) as u8,
                (x & 0xFF) as u8,
            ],
        }
    }
}

impl Index<usize> for Bytes {
    type Output = u8;
    fn index(&self, i: usize) -> &u8 {
        &self.b[i]
    }
}

impl IndexMut<usize> for Bytes {
    fn index_mut(&mut self, i: usize) -> &mut u8 {
        &mut self.b[i]
    }
}

#[macro_export]
macro_rules! bytes {
    ($name:ident,$l:expr) => {
        /// Fixed length byte array.
        /// Because Rust requires fixed length arrays to have a known size at
        /// compile time there's no generic fixed length byte array here.
        /// Use this to define the fixed length byte arrays needed in your code.
        #[derive(Clone, Copy)]
        pub struct $name {
            b: [u8; $l],
        }

        impl $name {
            pub fn new() -> Self {
                Self {
                    b: [0u8; $l]
                }
            }
            pub fn len(&self) -> usize {
                $l
            }
        }

        impl Index<usize> for $name {
            type Output = u8;
            fn index(&self, i: usize) -> &u8 {
                &self.b[i]
            }
        }
        impl IndexMut<usize> for $name {
            fn index_mut(&mut self, i: usize) -> &mut u8 {
                &mut self.b[i]
            }
        }
        impl Index<Range<usize>> for $name {
            type Output = [u8];
            fn index(&self, r: Range<usize>) -> &[u8] {
                &self.b[r]
            }
        }
        impl Index<RangeFull> for $name {
            type Output = [u8];
            fn index(&self, r: RangeFull) -> &[u8] {
                &self.b[r]
            }
        }
    };
}

pub fn to_array<A, T>(slice: &[T]) -> A
where
    A: Default + AsMut<[T]>,
    T: Copy,
{
    let mut a = A::default();
    <A as AsMut<[T]>>::as_mut(&mut a).copy_from_slice(slice);
    a
}

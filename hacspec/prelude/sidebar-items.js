initSidebarItems({"enum":[["Bound","An endpoint of a range of keys."],["GeneratorState","The result of a generator resumption."]],"fn":[["min","Compares and returns the minimum of two values."]],"macro":[["PartialEq","Derive macro generating an impl of the trait `PartialEq`."],["define_abstract_integer_checked","Defines a bounded natural integer with regular arithmetic operations, checked for overflow and underflow."],["define_refined_modular_integer","Defines a bounded natural integer with modular arithmetic operations"]],"mod":[["fmt","Utilities for formatting and printing `String`s."]],"struct":[["BigUint","A big unsigned integer type."],["I128",""],["I16",""],["I32",""],["I64",""],["I8",""],["ParseIntError","An error which can be returned when parsing an integer."],["Range","A (half-open) range bounded inclusively below and exclusively above (`start..end`)."],["RangeFrom","A range only bounded inclusively below (`start..`)."],["RangeFull","An unbounded range (`..`)."],["RangeInclusive","A range bounded inclusively below and above (`start..=end`)."],["RangeTo","A range only bounded exclusively above (`..end`)."],["RangeToInclusive","A range only bounded inclusively above (`..=end`)."],["SizeNatExample",""],["SizeNatFieldExample",""],["U128",""],["U16",""],["U32",""],["U64",""],["U8",""]],"trait":[["Add","The addition operator `+`."],["AddAssign","The addition assignment operator `+=`."],["BitAnd","The bitwise AND operator `&`."],["BitAndAssign","The bitwise AND assignment operator `&=`."],["BitOr","The bitwise OR operator `|`."],["BitOrAssign","The bitwise OR assignment operator `|=`."],["BitXor","The bitwise XOR operator `^`."],["BitXorAssign","The bitwise XOR assignment operator `^=`."],["CheckedSub","Performs subtraction that returns `None` instead of wrapping around on underflow."],["CoerceUnsized","Trait that indicates that this is a pointer or a wrapper for one, where unsizing can be performed on the pointee."],["Deref","Used for immutable dereferencing operations, like `*v`."],["DerefMut","Used for mutable dereferencing operations, like in `*v = 1;`."],["DispatchFromDyn","This is used for object safety, to check that a method's receiver type can be dispatched on."],["Div","The division operator `/`."],["DivAssign","The division assignment operator `/=`."],["Drop","Used to run some code when a value goes out of scope. This is sometimes called a 'destructor'."],["Fn","The version of the call operator that takes an immutable receiver."],["FnMut","The version of the call operator that takes a mutable receiver."],["FnOnce","The version of the call operator that takes a by-value receiver."],["Generator","The trait implemented by builtin generator types."],["Index","Used for indexing operations (`container[index]`) in immutable contexts."],["IndexMut","Used for indexing operations (`container[index]`) in mutable contexts."],["Mul","The multiplication operator `*`."],["MulAssign","The multiplication assignment operator `*=`."],["Neg","The unary negation operator `-`."],["Not","The unary logical negation operator `!`."],["Num","The base trait for numeric types, covering `0` and `1` values, comparisons, basic numeric operations, and string conversion."],["PartialEq","Trait for equality comparisons which are partial equivalence relations."],["RangeBounds","`RangeBounds` is implemented by Rust's built-in range types, produced by range syntax like `..`, `a..`, `..b`, `..=c`, `d..e`, or `f..=g`."],["Rem","The remainder operator `%`."],["RemAssign","The remainder assignment operator `%=`."],["Shl","The left shift operator `<<`. Note that because this trait is implemented for all integer types with multiple right-hand-side types, Rust's type checker has special handling for `_ << _`, setting the result type for integer operations to the type of the left-hand-side operand. This means that though `a << b` and `a.shl(b)` are one and the same from an evaluation standpoint, they are different when it comes to type inference."],["ShlAssign","The left shift assignment operator `<<=`."],["Shr","The right shift operator `>>`. Note that because this trait is implemented for all integer types with multiple right-hand-side types, Rust's type checker has special handling for `_ >> _`, setting the result type for integer operations to the type of the left-hand-side operand. This means that though `a >> b` and `a.shr(b)` are one and the same from an evaluation standpoint, they are different when it comes to type inference."],["ShrAssign","The right shift assignment operator `>>=`."],["Sub","The subtraction operator `-`."],["SubAssign","The subtraction assignment operator `-=`."],["Try","A trait for customizing the behavior of the `?` operator."],["Zero","Defines an additive identity element for `Self`."]]});
var searchIndex = {};
searchIndex["widestring"] = {"doc":"A wide string FFI library for converting to and from Windows Wide &quot;Unicode&quot; strings.","items":[[3,"WideString","widestring","An owned, mutable &quot;wide&quot; string for windows FFI that is **not** nul-aware.",null,null],[3,"WideStr","","Wide string reference for `WideString`.",null,null],[3,"WideCString","","An owned, mutable C-style &quot;wide&quot; string for windows FFI that is nul-aware and nul-terminated.",null,null],[3,"WideCStr","","C-style wide string reference for `WideCString`.",null,null],[3,"NulError","","An error returned from `WideCString` to indicate that an invalid nul value was found.",null,null],[3,"MissingNulError","","An error returned from `WideCString` and `WideCStr` to indicate that a terminating nul value\nwas missing.",null,null],[11,"hash","","",0,null],[11,"cmp","","",0,null],[11,"partial_cmp","","",0,null],[11,"lt","","",0,null],[11,"le","","",0,null],[11,"gt","","",0,null],[11,"ge","","",0,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"clone","","",0,null],[11,"default","","",0,{"inputs":[],"output":{"name":"widestring"}}],[11,"fmt","","",0,null],[11,"hash","","",1,null],[11,"cmp","","",1,null],[11,"partial_cmp","","",1,null],[11,"lt","","",1,null],[11,"le","","",1,null],[11,"gt","","",1,null],[11,"ge","","",1,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"fmt","","",1,null],[11,"new","","Constructs a new empty `WideString`.",0,{"inputs":[],"output":{"name":"widestring"}}],[11,"from_vec","","Constructs a `WideString` from a vector of possibly invalid or ill-formed UTF-16 data.",0,{"inputs":[{"name":"t"}],"output":{"name":"widestring"}}],[11,"from_str","","Encodes a `WideString` copy from an `OsStr`.",0,{"inputs":[{"name":"s"}],"output":{"name":"widestring"}}],[11,"from_ptr","","Constructs a `WideString` from a `u16` pointer and a length.",0,null],[11,"with_capacity","","Creates a `WideString` with the given capacity.",0,{"inputs":[{"name":"usize"}],"output":{"name":"widestring"}}],[11,"capacity","","Returns the capacity this `WideString` can hold without reallocating.",0,null],[11,"clear","","Truncate the `WideString` to zero length.",0,null],[11,"reserve","","Reserves the capacity for at least `additiona` more capacity to be inserted in the given\n`WideString`.",0,null],[11,"reserve_exact","","Reserves the minimum capacity for exactly `additiona` more capacity to be inserted in the\ngiven `WideString`. Does nothing if the capcity is already sufficient.",0,null],[11,"as_wide_str","","Converts to a `WideStr` reference.",0,null],[11,"into_vec","","Converts the wide string into a `Vec&lt;u16&gt;`, consuming the string in the process.",0,null],[11,"push","","Extends the wide string with the given `&amp;WideStr`.",0,null],[11,"push_slice","","Extends the wide string with the given `&amp;[u16]` slice.",0,null],[11,"push_str","","Extends the string with the given `&amp;OsStr`.",0,null],[11,"into","","",0,null],[11,"from","collections::borrow","",2,{"inputs":[{"name":"widestring"}],"output":{"name":"cow"}}],[11,"from","widestring","",0,{"inputs":[{"name":"string"}],"output":{"name":"widestring"}}],[11,"from","","",0,{"inputs":[{"name":"osstring"}],"output":{"name":"widestring"}}],[11,"from","std::ffi::os_str","",3,{"inputs":[{"name":"widestring"}],"output":{"name":"osstring"}}],[11,"from","widestring","",0,{"inputs":[{"name":"t"}],"output":{"name":"widestring"}}],[11,"index","","",0,null],[11,"deref","","",0,null],[11,"eq","","",0,null],[11,"partial_cmp","","",0,null],[11,"eq","","",0,null],[11,"partial_cmp","","",0,null],[11,"eq","","",0,null],[11,"partial_cmp","","",0,null],[11,"new","","Coerces a value into a `WideStr`.",1,{"inputs":[{"name":"s"}],"output":{"name":"widestr"}}],[11,"from_ptr","","Constructs a `WideStr` from a `u16` pointer and a length.",1,null],[11,"from_slice","","Constructs a `WideStr` from a slice of `u16` partial code points.",1,null],[11,"to_os_string","","Decodes a wide string to an owned `OsString`.",1,null],[11,"to_wide_string","","Copies the wide string to a new owned `WideString`.",1,null],[11,"to_string","","Copies the wide string to a `String` if it contains valid UTF-16 data.",1,null],[11,"to_string_lossy","","Copies the wide string to a `String`.",1,null],[11,"as_slice","","Converts to a slice of the wide string.",1,null],[11,"as_ptr","","Returns a raw pointer to the wide string.",1,null],[11,"len","","Returns the length of the wide string as number of UTF-16 partial code units (**not** code\npoints and **not** number of bytes).",1,null],[11,"is_empty","","Returns whether this wide string contains no data.",1,null],[11,"borrow","","",0,null],[11,"to_owned","","",1,null],[11,"from","collections::borrow","",2,{"inputs":[{"name":"widestr"}],"output":{"name":"cow"}}],[11,"as_ref","widestring","",1,null],[11,"as_ref","","",0,null],[11,"as_ref","","",1,null],[11,"as_ref","","",0,null],[11,"hash","","",4,null],[11,"cmp","","",4,null],[11,"partial_cmp","","",4,null],[11,"lt","","",4,null],[11,"le","","",4,null],[11,"gt","","",4,null],[11,"ge","","",4,null],[11,"eq","","",4,null],[11,"ne","","",4,null],[11,"clone","","",4,null],[11,"fmt","","",4,null],[11,"hash","","",5,null],[11,"cmp","","",5,null],[11,"partial_cmp","","",5,null],[11,"lt","","",5,null],[11,"le","","",5,null],[11,"gt","","",5,null],[11,"ge","","",5,null],[11,"eq","","",5,null],[11,"ne","","",5,null],[11,"fmt","","",5,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"clone","","",6,null],[11,"fmt","","",6,null],[11,"eq","","",7,null],[11,"ne","","",7,null],[11,"clone","","",7,null],[11,"fmt","","",7,null],[11,"new","","Constructs a new empty `WideCString`.",4,{"inputs":[],"output":{"name":"widecstring"}}],[11,"from_vec","","Constructs a `WideCString` from a container of UTF-16 data.",4,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[11,"from_vec_with_nul","","Constructs a `WideCString` from a nul-terminated container of UTF-16 data.",4,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[11,"from_vec_unchecked","","Creates a `WideCString` from a vector without checking for interior nul values.",4,{"inputs":[{"name":"t"}],"output":{"name":"widecstring"}}],[11,"from_vec_with_nul_unchecked","","Creates a `WideCString` from a vector that should have a nul terminator, without checking\nfor any nul values.",4,{"inputs":[{"name":"t"}],"output":{"name":"widecstring"}}],[11,"from_str","","Constructs a `WideCString` from anything that can be converted to an `OsStr`.",4,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[11,"from_str_with_nul","","Constructs a `WideCString` from anything that can be converted to an `OsStr` with a nul\nterminator.",4,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[11,"from_wide_str","","Constructs a `WideCString` from anything that can be converted to a `WideStr`.",4,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[11,"from_wide_str_with_nul","","Constructs a `WideCString` from anything that can be converted to a `WideStr` with a nul\nterminator.",4,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[11,"from_ptr_str","","Constructs a new `WideCString` copied from a `u16` nul-terminated string pointer.",4,null],[11,"from_ptr","","Constructs a new `WideCString` copied from a `u16` pointer and a length.",4,null],[11,"from_ptr_with_nul","","Constructs a new `WideString` copied from a `u16` pointer and a length.",4,null],[11,"as_wide_c_str","","Converts to a `WideCStr` reference.",4,null],[11,"into_vec","","Converts the wide string into a `Vec&lt;u16&gt;` without a nul terminator, consuming the string in\nthe process.",4,null],[11,"into_vec_with_nul","","Converts the wide string into a `Vec&lt;u16&gt;`, consuming the string in the process.",4,null],[11,"into_raw","","Transfers ownership of the wide string to a C caller.",4,null],[11,"from_raw","","Retakes ownership of a CString that was transferred to C.",4,null],[11,"into","","",4,null],[11,"from","collections::borrow","",2,{"inputs":[{"name":"widecstring"}],"output":{"name":"cow"}}],[11,"from","std::ffi::os_str","",3,{"inputs":[{"name":"widecstring"}],"output":{"name":"osstring"}}],[11,"from","widestring","",0,{"inputs":[{"name":"widecstring"}],"output":{"name":"widestring"}}],[11,"from","","",4,{"inputs":[{"name":"t"}],"output":{"name":"widecstring"}}],[11,"index","","",4,null],[11,"deref","","",4,null],[11,"default","","",4,{"inputs":[],"output":{"name":"widecstring"}}],[11,"new","","Coerces a value into a `WideCStr`.",5,{"inputs":[{"name":"s"}],"output":{"name":"widecstr"}}],[11,"from_ptr_str","","Constructs a `WideStr` from a `u16` nul-terminated string pointer.",5,null],[11,"from_ptr_with_nul","","Constructs a `WideStr` from a `u16` pointer and a length.",5,null],[11,"from_slice_with_nul","","Constructs a `WideCStr` from a slice of `u16` values that has a nul terminator.",5,null],[11,"to_wide_c_string","","Copies the wide string to an new owned `WideString`.",5,null],[11,"to_os_string","","Decodes a wide string to an owned `OsString`.",5,null],[11,"to_wide_string","","Copies the wide string to a new owned `WideString`.",5,null],[11,"to_string","","Copies the wide string to a `String` if it contains valid UTF-16 data.",5,null],[11,"to_string_lossy","","Copies the wide string to a `String`.",5,null],[11,"as_slice","","Converts to a slice of the wide string.",5,null],[11,"as_slice_with_nul","","converts to a slice of the wide string, including the nul terminator.",5,null],[11,"as_ptr","","Returns a raw pointer to the wide string.",5,null],[11,"len","","Returns the length of the wide string as number of UTF-16 partial code units (**not** code\npoints and **not** number of bytes) **not** including nul terminator.",5,null],[11,"is_empty","","Returns whether this wide string contains no data (i.e. is only the nul terminator).",5,null],[11,"borrow","","",4,null],[11,"to_owned","","",5,null],[11,"from","collections::borrow","",2,{"inputs":[{"name":"widecstr"}],"output":{"name":"cow"}}],[11,"as_ref","widestring","",5,null],[11,"as_ref","","",4,null],[11,"as_ref","","",5,null],[11,"as_ref","","",4,null],[11,"nul_position","","Returns the position of the nul value in the slice that was provided to `WideCString`.",6,null],[11,"into_vec","","Consumes this error, returning the underlying vector of u16 values which generated the error\nin the first place.",6,null],[11,"into","","",6,null],[11,"fmt","","",6,null],[11,"description","","",6,null],[11,"into_vec","","Consumes this error, returning the underlying vector of u16 values which generated the error\nin the first place.",7,null],[11,"fmt","","",7,null],[11,"description","","",7,null]],"paths":[[3,"WideString"],[3,"WideStr"],[4,"Cow"],[3,"OsString"],[3,"WideCString"],[3,"WideCStr"],[3,"NulError"],[3,"MissingNulError"]]};
initSearch(searchIndex);
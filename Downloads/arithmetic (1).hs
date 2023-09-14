-- A Virtual Machine (VM) for Arithmetic (template) 
-- Copyright: Alexander Kurz 2022

-----------------------
-- Data types of the VM
-----------------------

-- Natural numbers
data NN = O | S NN
  deriving (Eq,Show) -- for equality and printing

-- Integers
data II = II NN NN
  deriving Show -- for printing

-- Positive integers (to avoid dividing by 0)
data PP = I | T PP
  deriving (Show, Eq)

-- Rational numbers
data QQ =  QQ II PP
  deriving Show

------------------------
-- Arithmetic on the  VM
------------------------

----------------
-- PP Arithmetic
----------------

-- add positive numbers
addP :: PP -> PP -> PP 
addP I m = T m
addP (T m) n = T (addP m n)

-- multiply positive numbers
multP :: PP -> PP -> PP
multP I m = m
multP (T m) n = addP n (multP m n)

---------------
-- TYPECASTINGS
---------------

----------------
-- NN Arithmetic
----------------

-- add natural numbers
addN :: NN -> NN -> NN
addN O m = m
addN (S n) m = S (addN n m)

-- multiply natural numbers
multN :: NN -> NN -> NN
multN O m = O
multN (S n) m = addN (multN n m) m

----------------
-- II Arithmetic
----------------

----------------
-- QQ Arithmetic
----------------

----------------
-- Normalisation
----------------

----------------------------------------------------
-- Converting between VM-numbers and Haskell-numbers
----------------------------------------------------

-- Precondition: Inputs are non-negative
nn_int :: Integer -> NN
nn_int 0 = O
nn_int n = S (nn_int (n-1))

int_nn :: NN -> Integer
int_nn O = 0
int_nn (S n) = 1 + int_nn n

ii_int :: Integer -> II
ii_int n = II (nn_int n) O

int_ii :: II -> Integer
int_ii (II n m) = int_nn n - int_nn m

-- Precondition: Inputs are positive
pp_int :: Integer -> PP

int_pp :: PP->Integer

float_qq :: QQ -> Float
-- use fromIntegral to convert from Integer to Float

----------
-- Testing
----------
main = do
    putStr "addN:  "; print $ int_nn (addN (nn_int 3) (nn_int 4)) -- 7 
    putStr "multN: "; print $ int_nn (multN (nn_int 3) (nn_int 4)) -- 12





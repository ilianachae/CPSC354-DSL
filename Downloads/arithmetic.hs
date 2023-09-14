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

-- cast numbers of type PP as numbers of type NN
-- nn_pp :: PP -> NN

-- cast numbers of type NN to numbers of type II
-- ii_nn :: NN -> II

-- cast numbers of type PP to numbers of type II
-- ii_pp :: PP -> II

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

-- division, eg 13 divided by 5 is 2 
-- divN :: NN -> PP -> NN

-- remainder, eg 13 modulo by 5 is 3
-- modN :: NN -> PP -> NN

-- greatest common divisor, eg gcd 9 33 is 3
-- gcdP :: PP -> PP -> PP

----------------
-- II Arithmetic
----------------

-- Addition
-- (a-b)+(c-d)=(a+c)-(b+d)
addI :: II -> II -> II
addI (II a b) (II c d) = II (addN a c) (addN b d)

-- Multiplication
-- (a-b)*(c-d)=(ac+bd)-(ad+bc)
multI :: II -> II -> II
multI (II O _) _ = II O O
multI _ (II O _) = II O O
multI (II a b) (II c d) = II (addN (multN a c) (multN b d)) (addN (multN a d) (multN b c))

-- Negation
-- negI :: II -> II

-- Equality of integers
instance Eq II where
  (II a b) == (II c d) = (addN a d == addN c b)

----------------
-- QQ Arithmetic
----------------

-- Addition
-- addQ :: QQ -> QQ -> QQ

-- Multiplication:
-- multQ :: QQ -> QQ -> QQ

-- Equality of fractions
instance Eq QQ where
  (QQ a b) == (QQ c d) = (multI a (ii_pp d)) == (multI c (ii_pp b))

----------------
-- Normalisation
----------------

----------------------------------------------------
-- Converting between VM-numbers and Haskell-numbers
----------------------------------------------------

----------
-- Testing
----------
main = do
    print $ addN (S (S O)) (S O) -- S (S (S O))
    print $ multN (S (S O)) (S (S (S O))) -- S (S (S (S (S (S O)))))
    putStr "addN:  "; print $ int_nn (addN (nn_int 3) (nn_int 4)) -- 7 
    putStr "multN: "; print $ int_nn (multN (nn_int 3) (nn_int 4)) -- 12
    putStr "addP:  "; print $ int_pp (addP (pp_int 5) (pp_int 3)) -- 8
    putStr "multP: "; print $ int_pp (multP (pp_int 5) (pp_int 6)) -- 30




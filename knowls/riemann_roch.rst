Riemann-Roch Theorems
=====================

Hirzebruch-Riemann-Roch theorem
-------------------------------

The Hirzebruch-Riemann-Roch formula states that the Euler characteristic
:math:`\chi(X, E)` of some coherent sheaf :math:`E` on a smooth proper
scheme :math:`X` over a field is given by the degree in the Chow group
of the dimension zero component of the product of the Chern character
:math:`\mathrm{ch}(E)` of the sheaf and the Todd class
:math:`\mathrm{Td}_{X}` of the tangent bundle of :math:`X`.

.. math:: \chi(X, E)=\int_{X}\mathrm{ch}(E)\mathrm{Td}_{X}.

Examples
~~~~~~~~

-  :math:`\chi(X, \mathcal{O}_{X})` of an abstract variety.

.. code:: ipython3

    %%macaulay2
    X = abstractVariety(2,QQ[r,D,d_1,K,c_2,d_2,Degrees=>{0,3:1,2:2}])
    X.TangentBundle = abstractSheaf(X,Rank=>2,ChernClass=>1-K+c_2)
    
    todd(X)
    chi OO_X


.. parsed-literal::

    X
    
    an abstract variety of dimension 2
    
    a sheaf
    
    an abstract sheaf of rank 2 on X
    
        1      1 2    1
    1 - -K + (--K  + --c )
        2     12     12 2
    
    QQ[r, D, d , K, c , d ]
              1      2   2
    
              1 2    1
    integral(--K  + --c )
             12     12 2
    
    Expression of class Adjacent


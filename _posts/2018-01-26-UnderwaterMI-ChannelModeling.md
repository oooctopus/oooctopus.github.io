<script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML"> </script>
---
layout:     post
title:      A Comprehensive Note about the Channel Model of Underwater Magnetic Induction Communications
subtitle:   Welcome to the Mysterious Underwater MI World
date:       2018-01-26
author:     Oooctopus
header-img: img/img-post-bg-MI.jpg
catalog: true
tags: MI
    - Underwater
    - Channel Modeling
---

> Path Loss Models


# Overview of Underwater MI Channels
From the perspective of power, path loss of an underwater MI channel is mainly consisting of the active power consumed by the resistant elements in the transmitting circuit, the reactive power that is not induced by the receiving circuit, and the attenuation incurred by the eddy currents through the conductive seawater. Typically, path loss of underwater MI channels is best characterized by the mutual inductance between the transmitted coil and the received coil. 

## Mutual Induction
The induced voltage is related to the coupling between the coils, which is determined by the mutual inductance [1],[2]    
<center>
<a href="http://www.codecogs.com/eqnedit.php?latex=M=\frac{\mu{\pi}N_{tx}N_{rx}a^2_{tx}a^2_{rx}}{2\sqrt{(a^2_{tx}&plus;r^2)^3}}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?M=\frac{\mu{\pi}N_{tx}N_{rx}a^2_{tx}a^2_{rx}}{2\sqrt{(a^2_{tx}&plus;r^2)^3}}" title="M=\frac{\mu{\pi}N_{tx}N_{rx}a^2_{tx}a^2_{rx}}{2\sqrt{(a^2_{tx}+r^2)^3}}" /></a> 
</center>
where 
$\mu$
$$\mu\pi$$
# Reference
[1] Steven Kisseleff and Ian F. Akyildiz, "Throughput of the Magnetic Induction Based Wireless Underground Sensor Networks: Key Optimization Techniques".   
[2] Mari Carmen Domingo, "Magnetic Induction for Underwater Wireless Communication Networks".

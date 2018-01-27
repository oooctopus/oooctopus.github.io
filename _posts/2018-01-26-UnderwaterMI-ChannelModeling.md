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

<script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML"> </script>

# Overview of Underwater MI Channels
From the perspective of power, path loss of an underwater MI channel is mainly consisting of the active power consumed by the resistant elements in the transmitting circuit, the reactive power that is not induced by the receiving circuit, and the attenuation incurred by the eddy currents through the conductive seawater. Typically, path loss of underwater MI channels is best characterized by the mutual inductance between the transmitted coil and the received coil. 

## Mutual Induction
The induced voltage is related to the coupling between the coils, which is determined by the mutual inductance [1],[2]    
\\( M = \frac{\mu\pi N_{tx}N_{rx} a^2_{tx}a^2_{rx}}{2\sqrt{(a^2_{tx}+r^2)^3}} \\)
\\[ M = \frac{\mu\pi N_{tx}N_{rx} a^2_{tx}a^2_{rx}}{2\sqrt{(a^2_{tx}+r^2)^3}} \\]
$$ M = \frac{\mu\pi N_{tx}N_{rx} a^2_{tx}a^2_{rx}}{2\sqrt{(a^2_{tx}+r^2)^3}} $$
$ M = \frac{\mu\pi N_{tx}N_{rx} a^2_{tx}a^2_{rx}}{2\sqrt{(a^2_{tx}+r^2)^3}} $
# Reference
[1] Steven Kisseleff and Ian F. Akyildiz, "Throughput of the Magnetic Induction Based Wireless Underground Sensor Networks: Key Optimization Techniques".   
[2] Mari Carmen Domingo, "Magnetic Induction for Underwater Wireless Communication Networks".

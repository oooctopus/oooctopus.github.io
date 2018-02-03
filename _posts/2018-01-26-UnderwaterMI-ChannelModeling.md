---
layout:     post
title:      A Comprehensive Note about the Channel Model of Underwater Magnetic Induction Communications
subtitle:   Welcome to the Mysterious Underwater MI World
date:       2018-01-26
author:     Oooctopus
header-img: img/img-post-bg-MI.jpg
catalog: true
tags: MI Underwater Communications
---

> Path Loss Models

<script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML"> </script>

# Overview of Underwater MI Channels
From the perspective of power, path loss of an underwater MI channel is mainly consisting of the active power consumed by the resistant elements in the transmitting circuit, the reactive power that is not induced by the receiving circuit, and the attenuation incurred by the eddy currents through the conductive seawater. Typically, path loss of underwater MI channels is best characterized by the mutual inductance between the transmitted coil and the received coil. 

## Mutual Induction between two Coils with Identical Orientations
The induced voltage is related to the coupling between the coils, which is determined by the mutual inductance [1]-[2]      
<center> $$ M = \frac{\mu\pi N_{tx}N_{rx} a^2_{tx}a^2_{rx}}{4\sqrt{(a^2_{tx}+r^2)^3}} \cdot J \cdot G$$ </center>
where $$\mu$$ is the magnetic permeability, $$\mu = \mu_0 \cdot \mu_r$$, $$\mu_0 = 4\pi \cdot 10^{-7}$$ H/m is the magnetic constant, $$\mu_r = 1$$ is the relative permeability of water. $$a_{tx},a_{rx},N_{tx},N_{rx}$$ are the radii and turns of the transmitted and received coils, respectively, and $$r$$ is the distance between them. $$G$$ characterizes the attenuation of eddy currents, which yields an exponential decrease of the field strength with the transmission distance similar to the skin effect in the copper wires. Hence, the loss factor $$G$$ can be expressed as [1]
<center> $$ G = e^{\frac{-r}{\sigma}} $$ </center> 
where $$\sigma$$ is the skin depth that depends on the signal frequency, conductivity, and permittivity of the transmission medium, which are usually treated as known to the system designer, given by [3]
<center> $$ \sigma = \frac{1}{2\pi f\sqrt{\frac{\mu\epsilon}{2}(\sqrt{1+\frac{\sigma^2}{(2\pi f)^2\epsilon^2}}-1)}} $$ </center> 
where $$\epsilon$$ and $$\sigma$$ denote the permittivity and conductivity of the medium, respectively, and $$f$$ is the signal frequency. Note that another well-known formula, i.e.,
<center> $$ \sigma = \sqrt{\frac{1}{\pi f\mu\sigma}} $$ </center> 
holds only for good conductors. For different range of frequencies, the same medium may take on different conductivities.
In addition, $$J$$ is the polarization factor that is related to the orientations of coil antennas. In the litrature, the widely-adopted expression is only valid in the two-dimensional space, given as
<center> $$ J_{2D} = 2\sin(\theta_{tx})\sin(\theta_{rx})+\cos(\theta_{tx})\cos(\theta_{rx}). $$ </center> 
For the polarization factor in three-dimensional space, we obtain [1]
<center> $$ J_{3D} = 2\sin(\theta_{tx})\sin(\theta_{rx})+\cos(\theta_{tx})\cos(\theta_{rx})\cos(\phi) $$ </center> 
where $$\theta_{tx}$$ and $$\theta_{rx}$$ are the angles 
between the coil radial directionsmof transmitter and receiver, and the line connecting the two coil centers, respectively. $$\phi$$ is the angle difference between the coil axes in the plane that is orthogonal to the direction of transmission. Given the positions of transmitter and receiver coils and their axes orientation, the corresponding values for $$\theta_{tx}$$, $$\theta_{rx}$$, and $$\phi$$ can be
determined using vector algebra.

Usually, $$a_{tx}$$ is negligible compared with the transmission distance. Under this condition, the mutual inductance can be simplified as 
<center> $$ M = \frac{\mu\pi N_{tx}N_{rx} a^2_{tx}a^2_{rx}}{4r^2} \cdot J \cdot G. $$ </center>  

## Parameters of the Coil Antennas
The self induction of a solenoid can be calculated as
<center> $$ L_{tx} = \frac{1}{2}\mu\pi N^2_{tx}a_{t} $$ </center>   
<center> $$ L_{rx} = \frac{1}{2}\mu\pi N^2_{rx}a_{r}. $$ </center> 
Similarly, the resistance is determined by the material, the size, and the number of turns of the coil
<center> $$ R_{tx} = N_{tx} \cdot 2\pi a_{tx} \cdot R_0 $$ </center> 
<center> $$ R_{rx} = N_{rx} \cdot 2\pi a_{rx} \cdot R_0 $$ </center> 
where $$R_0$$ is the resistance of a unit length of the loop. According to American Wire Gauge (AWG) standard, $$R_0$$ can be a value from $$2\times 10^{-4}$$ $$\Omega$$/m to $$3$$ $$\Omega$$/m with different wire diameter [2].

## Path Loss
A point-to-point underwater communication system can be regarded equivalently as a two-port network of a dual antenna system, to maximize the received power, the load impedance of the receiver is designed to be equal to the complex conjugate of the input impedance at the port of the receiver, which can be found as follows when we neglect the internal impedance of power source [2]
<center> $$ Z_{L} = R_{rx} + \frac{\omega^2 M^2 R_{tx}}{R^2_{tx}+\omega^2 L^2_{tx}} + j\Big( \frac{\omega^3 M^2 L_{tx}}{R^2_{tx}+\omega^2 L^2_{tx}} - \omega L_{rx}\Big).$$ </center>
Through basic circuit theory, we can obtain the path loss PL as
<center>$$PL_{MI} = -10\log_{10}{\frac{R_L \omega^2 M^2}{R_{tx}(R_L + R_{rx})^2 + R_{tx}(X_L + \omega L_{rx})^2}}.$$ </center>
In case of low coil resistances and high operating frequency ($$R_0 \ll \omega\mu$$), the path loss model of the MI communication system can be simplified as [4]
<center>$$PL_{MI} = -10\log_{10}\frac{R^2_{rx}}{\omega^2 M^2}.$$</center>

# Reference
[1] S. Kisseleff and Ian F. Akyildiz, "Throughput of the Magnetic Induction Based Wireless Underground Sensor Networks: Key Optimization Techniques".   
[2] M. C. Domingo, "Magnetic Induction for Underwater Wireless Communication Networks".  
[3] S. Kisseleff $$\textit{et. al}$$, "Channel Capacity of Magnetic Induction Based Wireless Underground Sensor Networks under Practical Constraints".  
[4] Z. Zhang $$\textit{et. al}$$, "Connectivity of Magnetic Induction-Based Ad Hoc Networks".

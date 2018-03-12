---
layout:     post
title:      Models of Underwater Acoustic Multi-path Channel  
subtitle:   Welcome to the Practical Underwater Acoustic World
date:       2018-03-12
author:     Oooctopus
header-img: img/img-post-bg-Acoustic.jpg
catalog: true
tags: Acoustic Underwater Communications
---

> Frequency Transfer Function

<script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML"> </script>

# Nominal Conditions and Large-scale Path Loss
Nominal channel geometry, along with a specified sound-speed profile, gives rise to the nominal response of an acoustic channel that characterizes a time-invariant system. The basic path loss experienced by a signal of frequency $f$ traveling over distance $l$ affects the received signal energy and
is given by
<center> $$A(l,f) = A_o l^k a(f)^l$$ </center>
where $$A_o$$ is a scaling constant, $$k$$ is the spreading factor, and $$a(f)$$ is the absorption coefficient, which can be obtained in decibels per kilometer using the Thorp's empirical formula as
<center> $$0.11\frac{f^2}{1+f^2} + 44\frac{f^2}{4100+f^2} + 2.75 \times 10^{-4} f^2 + 0.003$$ </center>
where $$f$$ is in kilohertz.

## Multi-path Effect
Considering multiple propagation paths of nominal length $$\overline{l}_p$$, $$p=0,...,P-1$$, each path will act as a lowpass filter, whose transfer function, which affects the amplitude of the received signal, can be modeled as
<center> $$\overline{H}_p(f) = \frac{\Gamma_p}{\sqrt{A(\overline{l}_p,f)}}$$ </center>
where $$\Gamma_p$$ is the cumulative reflection coefficient encountered over $$n_{sp}$$ surface and $$n_{bp}$$ bottom reflections along the $p$-th path. Particularly, $$\overline{H}_p(f) = \frac{1}{\sqrt{(\overline{l}_p,f)}}$$ if $$n_{sp} = 0$$ and $$n_{bp} = 0$$.

Given the transfer function of each path, the overall transfer function of the multipath channel is obtained as
<center> $$\overline{H}(f) = \sum_{p} \overline{H}_p(f)e^{-j2\pi f\overline{\tau}_p}$$ </center>
where $$\overline{\tau}_p$$ is the propagation delay associated with the $$p$$-th path, i.e., $$\overline{\tau}_p = \overline{l}_p/c - t_0$$ for constant sound speed, measured in reference to some $$t_0$$, e.g., $$t_0=l_0/c$$.

## Rational Simplification
In general, each path is characterized by an impulse response of a different shape, and this fact prevents one from obtaining a tractable, simple channel model.
To explore simplified versions, we examine an approximation to the function $$\overline{H}_p(f)$$.
In particular, let us express this function so as to include the dependence on the the reference path $$p=0$$
<center> $$\overline{H}_p(f) = \frac{\Gamma_p}{\sqrt{\Big(\frac{\overline{l}_p}{\overline{l}_0}\Big)^k a(f)^{\overline{l}_p-\overline{l}_0}}}\overline{H}_0(f).$$ </center>

The frequency-dependence that distinguishes the $$p$$-th path from the reference path is embodied in the term $$a(f)^{\overline{l}_p-\overline{l}_0}$$. If this term could be approximated as constant, one could model all the paths by an impulse response of the same shape and just a different gain. The fact that the absorption factor $$a(f)$$ has a value very close to 1 for a broad range of acoustic communication frequencies may justify an approximation of the form
<center> $$a(f)^{-(\overline{l}_p-\overline{l}_0)/2}  \approx a_0^{-(\overline{l}_p-\overline{l}_0)/2}$$ </center>
where $$a_0$$ is the absorption factor corresponding to a frequency within the signal bandwidth $$[f_0,f_0 + B]$$.
For several path loss differences $$\Delta\overline{l}_p = \overline{l}_p-\overline{l}_0$$, the values of $$a(f)^{-(\overline{l}_p-\overline{l}_0)/2}$$ shown range only between about 0.9 and 1, indicating that the approximation may indeed be valid, especially for small path length differences. The smallest path length differences shown, 15 m, corresponding to the relative path delay of 10 ms, a value that is within the multipath spread of the majority of shallow-water channels. Note also that it suffices to judge the validity of this approximation within the frequency range occupied by a given system. For example, if a system operates in the 10--20-kHz acoustic band, the factor $$a(f)^{-\Delta\overline{l}_p/2}$$ varies only between 1 and 0.98 for $$-\Delta\overline{l}_p$$ up to 40 m.

Using the above approximation, we model the channel transfer function as
<center> $$\overline{H}_p(f) \approx \overline{h}_p(f)\overline{H}_0(f)$$ </center>
where the path gain is given by
<center> $$\overline{h}_p = \frac{\Gamma_p}{\sqrt{\Big(\frac{\overline{l}_p}{\overline{l}_0}\Big)^k a_0^{\overline{l}_p-\overline{l}_0}}}.$$ </center>
The constant $$a_0$$ may be taken as the absorption factor at any frequency within the operational bandwidth, e.g., the center frequency $$f_c$$, or the lower/upper band-edge frequency, resulting in maximal/minimal path gain, respectively. Any choice should be fine, since the assumption is that $$a(f)$$ does not change much over a typical bandwidth of an acoustic communication system.

From our discussion so far, it seems reasonable to adopt a channel model in which the effects of path filtering and multipath are decoupled such that each path contributes with a gain $$\overline{h}_p$$ and delay $$\overline{\tau}_p$$, while the filtering effect is the same for all the paths, and described by the function $$\overline{H}_0(f)$$. The overall channel transfer function is thus given by
<center> $$\overline{H}(f) = \overline{H}_0(f) \sum_{p} \overline{h}_pe^{-j2\pi f\overline{\tau}_p}.$$ </center>


# Reference
[1] P. Qarabaqi, M. Stojanovic, “Statistical characterization and computationally
efficient modeling of a class of underwater acoustic communication channels”, <p><font color="#0000FF"><i>IEEE J. Ocean. Eng.</i></font></p>, vol. 38, no. 4, Sep. 2013.

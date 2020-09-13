<radialGradient id="sun-galo"
    cx="50%" y="50%">
<stop offset="0" stop-color="rgba(211,101,5,.2)"/>
<stop offset="100%" stop-color="rgba(211,101,5,0)"/>
</radialGradient>
<radialGradient id="sun-base"
    cx="50%" y="50%">
<stop offset="52%" stop-color="#9E3102"/>
<stop offset="89%" stop-color="#C45403"/>
<stop offset="98%" stop-color="rgba(210,143,45,.9)"/>
<stop offset="100%" stop-color="rgba(255,190,57,.8)"/>
</radialGradient>
<radialGradient id="sun-light"
    cx="42%" cy="42%">
<stop offset="10%" stop-color="#CD7217"/>
<stop offset="85%" stop-color="rgba(200,89,4,.8)"/>
<stop offset="100%" stop-color="rgba(200,89,4,.0)"/>
</radialGradient>

<g class="sun">
<circle class="sun-bg" cx="2500" cy="2500" r="2000" fill="url(#sun-galo)" stroke="none" />
<circle class="sun-bg" cx="2500" cy="2500" r="250" fill="url(#sun-base)" stroke="none" />
<circle class="sun-light" cx="2500" cy="2500" r="250" fill="url(#sun-light)" stroke="none" />
</g>
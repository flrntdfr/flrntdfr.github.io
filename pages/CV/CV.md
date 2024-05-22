---
layout: page
title: CV
permalink: /CV
css:
  - nav.css
  - latex.css
---

{% include nav.html %}

# tl;dr

- Florent Dufour, 🇫🇷, 28 years old, Ph.D. Student, AI in Medicine  / Trustworthy AI.
- Affiliated with the Technical University Munich (TUM) & Leibniz Supercomputing Centre (LRZ) 🇩🇪.
- Interested in Privacy Enhancing Technologies, Confidential Cloud Computing, Health Research, and self-sovereignty.
- Passionate about education, geopolitics, audiovisual media, podcasting, and generative art.

**Languages**: French, English, Python, German, Java, R, bash, HTML/CSS/JS, Swift, SQL, ~~MATLAB~~.

**Technologies**: PyTorch, Tensorflow, OpenStack, Docker, Terraform, ansible, Processing, Hyperledger, SpringBoot, Vaadin.

**Platforms**: GNU/UN\*X, macOS, OpenStack, slurm.

**Graphics**: Adobe Photoshop, Illustrator, Lightroom, Final Cut Pro X, <span markdown=0 class="latex-logo"><span class="L">L</span><span class="A">A</span><span class="T">T</span><span class="E">E</span><span class="x">X</span></span>.

**Environments and norms**: ISO 9001, ISO 27k, GDPR, lab confinement up to P3.

# Education

{% for edu in site.data.cv-education %}
  **{{ edu.date }}: {{ edu.diploma }}**: {{ edu.description }}
{% endfor %}

# Research Experience

{% for project in site.data.cv-projects %}
  **{{ project.date }}: {{ project.title }}**: {{ project.description }}
{% endfor %}

# Honours & Awards

{% for distinction in site.data.cv-distinctions %}
  **{{ distinction.date }}**: {{ distinction.description }}
{% endfor %}

# Published Contributions

{% for publication in site.data.cv-publications %}
  1. {{ publication }}
{% endfor %}

You can also find me on [ORCID]({{ site.data.social.orcid.url }}) and [Google Scholar]({{ site.data.social.scholar.url }}).

# Talks

{% for talk in site.data.cv-talks %}
  **{{ talk.date }}: {{ talk.title }} ({{ talk.location }})**: {{ talk.description }}
{% endfor %}

# Teaching

{% for teaching in site.data.cv-teachings %}
  **{{ teaching.date }}: {{ teaching.title }} ({{ teaching.location }})**: {{ teaching.description }}
{% endfor %}

_This C.V. is also available as [PDF]({% link /x/cv.pdf %})_

<!-- TODO: Fix quick hack -->
<br><br><br><br><br><br>

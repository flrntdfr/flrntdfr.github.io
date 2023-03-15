---
layout: page
title: CV
permalink: /CV
css:
  - nav.css
---

{% include nav.html %}

# tl;dr

- Florent Dufour, 🇫🇷, ~~26~~ 27 years old.
- Ph.D. Student - AI in Medicine, Technical University Munich (TUM) 🇩🇪.
- Research engineer - Big data and AI, Leibniz Supercomputing Centre (LRZ).
- Graduate student - Universities of Strasbourg, Freiburg, &amp; Basel (tri-national program).
- Biologist, health researcher, data scientist, and AI developer.
- Interested in life science, healthcare, cloud technology, AI, data privacy, and self-sovereignty.
- Passionate about education, audiovisual production, podcasting, and generative art.

**Languages**: French, English, German, Python, Java, R, bash, HTML/CSS/JS, Swift, SQL, ~~MATLAB~~.

**Technologies**: Tensorflow, Numpy, Pandas, Matplotlib, Processing, Docker, Hyperledger, SpringBoot, JavaFX, Maven, JUnit.

**Platforms**: GNU/UN\*X, macOS, OpenStack, slurm, aws ec2 &amp; S3.

**Graphics**: Adobe Photoshop, Illustrator, Lightroom, Final Cut Pro X, \LaTeX, marpit.js

**Environments and norms**: ISO 9001, ISO 27k, GDPR, GMP, lab confinement up to P3.

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

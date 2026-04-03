<template>
  <NuxtRouteAnnouncer/>
  <div class="bg-linear-to-br from-gray-900 via-gray-950 to-black text-white font-sans antialiased">
    <main class="max-w-5xl mx-auto p-4 md:p-6">
      <header class="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-gray-700 pb-6">
        <div>
          <h1 class="text-3xl font-bold">Md. Nimuzzaman</h1>
          <p class="mt-2 text-gray-400 max-w-2xl">
            Software Engineer at Pathao | Go, Laravel, Vue.js | REST APIs · Microservices · Docker · Kubernetes ·
            Monitoring
            <br>
            <span class="text-gray-500">Jessore, Khulna, Bangladesh</span>
          </p>
        </div>
        <nav class="flex flex-wrap gap-3 mt-4 md:mt-0">
        <span class="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 bg-gray-800 text-sm">
          <span class="w-2.5 h-2.5 rounded-full bg-linear-to-b from-(--accent) to-(--accent2)"></span>
          Software Engineer
        </span>
          <span class="px-3 py-1 rounded-full border border-gray-700 bg-gray-800 text-sm">DevOps & Monitoring</span>
          <span class="px-3 py-1 rounded-full border border-gray-700 bg-gray-800 text-sm">Microservices</span>
        </nav>
      </header>

      <section class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <article class="md:col-span-2 bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col gap-4">
          <h2 class="text-xl font-semibold">Summary</h2>
          <p class="text-gray-300 leading-relaxed">
            Software Engineer at Pathao Ltd with expertise in Go, Laravel, Vue.js, PostgreSQL, Docker, Kubernetes, and
            REST APIs.
            Skilled in building high-performance, scalable web applications, implementing microservices architectures,
            and delivering
            solutions that improve user engagement and operational efficiency. Experienced in DevOps, monitoring, and
            system integrations.
            Passionate about solving complex problems and collaborating with cross-functional teams.
          </p>

          <div class="flex flex-wrap gap-3 mt-4">
            <a href="mailto:nimuzzamanj@gmail.com"
               class="px-4 py-2 rounded-lg bg-linear-to-br from-(--accent) to-(--accent2) text-black font-medium">Email</a>
            <a href="tel:+8801912986866" class="px-4 py-2 rounded-lg border border-gray-600">Call</a>
            <a href="https://www.linkedin.com/in/nimuzzaman" target="_blank" rel="noopener noreferrer"
               class="px-4 py-2 rounded-lg border border-gray-600">LinkedIn</a>
            <a href="https://nayeem.app/" target="_blank" rel="noopener noreferrer"
               class="px-4 py-2 rounded-lg border border-gray-600">Portfolio</a>
          </div>

          <div class="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-gray-400">
            <div>Mobile</div>
            <div><a href="tel:+8801912986866" class="hover:underline">+880 1912-986866</a></div>
            <div>Email</div>
            <div><a href="mailto:nimuzzamanj@gmail.com" class="hover:underline break-all">nimuzzamanj@gmail.com</a></div>
            <div>LinkedIn</div>
            <div><a href="https://www.linkedin.com/in/nimuzzaman" target="_blank" rel="noopener noreferrer"
                    class="hover:underline break-all">linkedin.com/in/nimuzzaman</a></div>
            <div>Portfolio</div>
            <div><a href="https://nayeem.app/" target="_blank" rel="noopener noreferrer" class="hover:underline">nayeem.app</a>
            </div>
          </div>
        </article>

        <aside class="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col gap-4">
          <h2 class="text-xl font-semibold">Top Skills</h2>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Docker</span>
            <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Bash</span>
            <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">AWS</span>
            <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Go</span>
            <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Laravel</span>
            <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Vue.js</span>
            <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">PostgreSQL</span>
            <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Kubernetes</span>
            <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">REST APIs</span>
            <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Microservices</span>
            <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Monitoring</span>
          </div>

          <h2 class="text-xl font-semibold mt-4">Certifications</h2>
          <ul class="list-disc list-inside text-gray-300">
            <li>DevOps Career Path Batch - 3</li>
            <li>Career Development Program</li>
            <li>Certified Ethical Hacker (CEH)</li>
            <li>Introduction to Cybersecurity</li>
            <li>AR/VR/MR</li>
          </ul>

          <h2 class="text-xl font-semibold mt-4">Education</h2>
          <ul class="list-disc list-inside text-gray-300">
            <li>Rajshahi University — BE, Information & Communication Engineering (2018–2023)</li>
            <li>Govt. Shahid Sirajuddin Hossain College — Science (2014–2016)</li>
            <li>Sekenderpur Secondary School — Science (2012–2014)</li>
            <li>K.K.R. Secondary School (2009–2011)</li>
          </ul>
        </aside>

        <article class="md:col-span-3 bg-gray-800 border border-gray-700 rounded-xl p-6 mt-6">
          <h2 class="text-xl font-semibold mb-4">Experience (Pathao — 2 years 4 months)</h2>
          <div class="flex flex-col gap-4">
            <div class="p-4 border border-gray-700 rounded-lg">
              <div class="flex justify-between flex-wrap">
                <span class="font-semibold">Software Engineer I</span>
                <span class="text-gray-400 text-sm">Jan 2025 – Present · Dhaka</span>
              </div>
              <ul class="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Developed a scheduling-enabled notification system for timely updates.</li>
                <li>Implemented the on-demand payment request feature.</li>
                <li>Built Internal Inventory module</li>
                <li>Designed a process to handle “No Entry” parcels, ensuring smoother deliveries.</li>
                <li>Enhanced a scalable notification service to improve user engagement.</li>
                <li>Worked on slab-based pricing features.</li>
                <li>Introduced SKU as new item type with pricing and discount logic.</li>
                <li>Provided API support for merchants.</li>
              </ul>
            </div>

            <div class="p-4 border border-gray-700 rounded-lg">
              <div class="flex justify-between flex-wrap">
                <span class="font-semibold">Associate Software Engineer</span>
                <span class="text-gray-400 text-sm">May 2024 – Dec 2024 · Dhaka</span>
              </div>
              <ul class="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Developer API UI/UX improvements and webhook handling.</li>
                <li>Redesigned sidebar and Help Center with new tabs and content.</li>
                <li>Updated password and role-based permissions.</li>
              </ul>
            </div>

            <div class="p-4 border border-gray-700 rounded-lg">
              <div class="flex justify-between flex-wrap">
                <span class="font-semibold">Intern Software Engineer</span>
                <span class="text-gray-400 text-sm">Jan 2024 – May 2024</span>
              </div>
              <ul class="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Enhanced Merchant Panel Landing Page, FAQ & Order Tracking UI.</li>
                <li>Added Bangla support for Zebra printers with custom JS package.</li>
                <li>Assisted database migrations for Issue Resolution Panel.</li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <footer class="mt-6 flex flex-wrap justify-between items-center text-gray-400 text-sm gap-2">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-(--good) animate-pulse"></span>Available for collaboration
        </div>
        <div>© {{ year }} Md. Nimuzzaman — All rights reserved</div>
      </footer>
    </main>
  </div>

</template>

<script setup>
const year = new Date().getFullYear()
</script>

function renderCounselors() {
    const grid = document.getElementById('counselor-grid');
    if (!grid) return;
    grid.innerHTML = counselors.map(c => `
        <div class="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer" onclick="window.location.href='/counselor.html?slug=${c.slug}'">
            <img src="${c.photoUrl}" alt="${c.name}" class="w-24 h-24 rounded-full mx-auto mb-3 object-cover">
            <h2 class="text-xl font-semibold text-center">${c.name}</h2>
            <p class="text-sm text-center text-gray-500">${c.practiceAreas.join(', ')}</p>
            <p class="text-center text-amber-700 font-semibold mt-1">${c.hourlyRate}/hr</p>
        </div>
    `).join('');
}

function loadCounselor() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    const counselor = counselors.find(c => c.slug === slug);
    const container = document.getElementById('profile-content');
    if (!container) return;
    if (!counselor) {
        container.innerHTML = '<h1 class="text-center text-red-600">Counselor not found</h1>';
        return;
    }
    const whatsappUrl = `https://wa.me/${counselor.whatsappNumber.replace(/[^0-9+]/g, '')}?text=${encodeURIComponent(`Hello ${counselor.name}, I'm a potential client. I'd like to discuss a legal matter. Are you available for a quick chat?`)}`;
    
    // Blue verified badge (X/LinkedIn style)
    const verifiedBadge = `<span class="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>Verified</span>`;
    
    container.innerHTML = `
        <div class="bg-white shadow rounded-lg p-6">
            <img src="${counselor.photoUrl}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
            <div class="text-center">
                <h1 class="text-2xl font-bold inline-flex items-center gap-2">${counselor.name} ${verifiedBadge}</h1>
            </div>
            <div class="mt-4 space-y-2">
                <p><strong>Practice Areas:</strong> ${counselor.practiceAreas.join(', ')}</p>
                <p><strong>Bar Admissions:</strong> ${counselor.barAdmissions}</p>
                <p><strong>Experience:</strong> ${counselor.yearsExperience} years</p>
                <p><strong>Languages:</strong> ${counselor.languages.join(', ')}</p>
                <p><strong>Location:</strong> ${counselor.locationCityState}</p>
                <p><strong>Hourly Rate:</strong> <span class="text-amber-700 font-semibold">${counselor.hourlyRate}</span></p>
                <p><strong>Bio:</strong> ${counselor.bio}</p>
            </div>
            <div class="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="${whatsappUrl}" target="_blank" class="bg-green-600 text-white text-center py-2 px-4 rounded hover:bg-green-700">Message on WhatsApp</a>
                <button onclick="navigator.clipboard.writeText('${counselor.email}')" class="border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50">Copy Email: ${counselor.email}</button>
            </div>
            <p class="text-xs text-gray-400 mt-6 text-center">This is an introductory chat only. No legal advice will be given via WhatsApp. Official communication must be via email.</p>
            <div class="mt-4 text-center"><a href="/" class="text-blue-600 underline">← Back to all counselors</a></div>
        </div>
    `;
}

if (window.location.pathname.includes('counselor.html')) {
    loadCounselor();
} else if (document.getElementById('counselor-grid')) {
    renderCounselors();
}

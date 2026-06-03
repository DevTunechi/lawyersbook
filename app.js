function renderCounselors() {
    const grid = document.getElementById('counselor-grid');
    grid.innerHTML = counselors.map(c => `
        <div class="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer" onclick="window.location.href='/counselor.html?slug=${c.slug}'">
            <img src="${c.photoUrl}" alt="${c.name}" class="w-24 h-24 rounded-full mx-auto mb-3 object-cover">
            <h2 class="text-xl font-semibold text-center">${c.name}</h2>
            <p class="text-sm text-center text-gray-500">${c.practiceAreas.join(', ')}</p>
        </div>
    `).join('');
}

function loadCounselor() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    const counselor = counselors.find(c => c.slug === slug);
    if (!counselor) {
        document.body.innerHTML = '<h1>Counselor not found</h1>';
        return;
    }
    const whatsappUrl = `https://wa.me/${counselor.whatsappNumber.replace(/[^0-9+]/g, '')}?text=${encodeURIComponent(`Hello ${counselor.name}, I'm a potential client. I'd like to discuss a legal matter. Are you available for a quick chat?`)}`;
    document.body.innerHTML = `
        <div class="max-w-3xl mx-auto p-6">
            <div class="bg-white shadow rounded-lg p-6">
                <img src="${counselor.photoUrl}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
                <h1 class="text-2xl font-bold text-center">${counselor.name}</h1>
                <div class="flex justify-center mt-1"><span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">✓ Verified by Chamber</span></div>
                <div class="mt-4 space-y-2">
                    <p><strong>Practice Areas:</strong> ${counselor.practiceAreas.join(', ')}</p>
                    <p><strong>Bar Admissions:</strong> ${counselor.barAdmissions}</p>
                    ${counselor.yearsExperience ? `<p><strong>Experience:</strong> ${counselor.yearsExperience} years</p>` : ''}
                    ${counselor.languages ? `<p><strong>Languages:</strong> ${counselor.languages.join(', ')}</p>` : ''}
                    ${counselor.locationCityState ? `<p><strong>Location:</strong> ${counselor.locationCityState}</p>` : ''}
                    <p><strong>Bio:</strong> ${counselor.bio}</p>
                </div>
                <div class="mt-6 flex flex-col sm:flex-row gap-3">
                    <a href="${whatsappUrl}" target="_blank" class="bg-green-600 text-white text-center py-2 px-4 rounded hover:bg-green-700">Message on WhatsApp</a>
                    <button onclick="navigator.clipboard.writeText('${counselor.email}')" class="border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50">Copy Email: ${counselor.email}</button>
                </div>
                <p class="text-xs text-gray-400 mt-6 text-center">This is an introductory chat only. No legal advice will be given via WhatsApp. Official communication must be via email.</p>
                <div class="mt-4 text-center"><a href="/" class="text-blue-600 underline">← Back to all counselors</a></div>
            </div>
        </div>
    `;
}
if (window.location.pathname.includes('counselor.html')) {
    loadCounselor();
} else {
    renderCounselors();
}

     const eventsData = [
            {
                name: "The Grand Wedding Package",
                subtitle: "All-inclusive Ceremony & Reception",
                price: "180,000.00",
                description: "A complete package covering venue rental, catering for 100 pax, basic decorations, and accommodation for the couple. Ideal for a stress-free wedding.",
                image: ["Pics/Events/Wedding.jpg"],
                tags: ["Wedding", "Full Service", "100 Pax"],
                buttonText: "Inquire on Dates",
                features: [
                    { icon: 'fas fa-ring', text: 'Venue & Catering (100 pax)' },
                    { icon: 'fas fa-hotel', text: 'Overnight Suite' },
                    { icon: 'fas fa-microphone', text: 'Sound System' },
                    { icon: 'fas fa-calendar-check', text: 'Event Coordinator' }
                ],
                type: "reception"
            },
            {
                name: "Classic Debut/Birthday Package",
                subtitle: "Celebration Package (50 Guests)",
                price: "55,000.00",
                description: "An elegant package for birthdays and debuts, including a function hall, buffet catering for 50 people, and standard floral arrangements.",
                image: ["Pics/Events/birthday.jpg"],
                tags: ["Birthday", "Debut", "50 Pax"],
                buttonText: "Book this Package",
                features: [
                    { icon: 'fas fa-birthday-cake', text: 'Function Hall Rental' },
                    { icon: 'fas fa-utensils', text: 'Catering (50 pax)' },
                    { icon: 'fas fa-music', text: 'Basic Lights & Sound' },
                    { icon: 'fas fa-clock', text: '4-Hour Event' }
                ],
                type: "reception"
            },
            {
                name: "Prenup / Pre-Birthday Photoshoot",
                subtitle: "All-day Site Use Permit",
                price: "8,000.00",
                description: "A permit for a full day (8:00 AM - 5:00 PM) of photo and video shoots across all resort non-exclusive locations. Includes private holding room.",
                image: ["Pics/Events/photoshoot.jpeg"],
                tags: ["Photoshoot", "Prenup", "Day Use"],
                buttonText: "Request Permit",
                features: [
                    { icon: 'fas fa-camera', text: 'All Resort Locations' },
                    { icon: 'fas fa-hourglass-half', text: '8:00 AM - 5:00 PM' },
                    { icon: 'fas fa-lock', text: 'Private Holding Room' },
                    { icon: 'fas fa-users', text: 'Max 5 Crew/Talents' }
                ],
                type: "reception"
            },
        ];

        function generateEventCard(item) {
            const tagsHtml = item.tags.map(tag => {
                let colorClass = 'bg-teal-600';
                if (tag === 'High Capacity') colorClass = 'bg-red-600';
                if (tag === 'Outdoor') colorClass = 'bg-green-600';
                if (tag === 'Wedding') colorClass = 'bg-pink-600';
                if (tag === 'Photoshoot') colorClass = 'bg-amber-600';
                if (tag === 'Birthday' || tag === 'Debut') colorClass = 'bg-purple-600';
                return `<span class="${colorClass} text-white px-3 py-1 rounded-full text-sm font-semibold">${tag}</span>`;
            }).join('');

            const featuresHtml = item.features.map(feature => `
                <div class="flex items-center">
                    <i class="${feature.icon} text-teal-600 mr-2"></i>
                    <span>${feature.text}</span>
                </div>
            `).join('');

            const images = Array.isArray(item.image) ? item.image : [item.image].filter(Boolean);
            let imageContentHtml = '';

            if (images.length > 0) {
                if (images.length > 1) {
                    imageContentHtml = `
                        <div class="grid grid-cols-3 h-64 gap-1 p-1">
                            <div class="col-span-2 h-full overflow-hidden rounded-xl">
                                <img src="${images[0]}" alt="${item.name}" class="w-full h-full object-cover">
                            </div>
                            <div class="col-span-1 h-full overflow-hidden rounded-xl">
                                <img src="${images[1]}" alt="${item.name}" class="w-full h-full object-cover">
                            </div>
                        </div>
                    `;
                } else {
                    imageContentHtml = `
                        <div class="h-64 overflow-hidden">
                            <img src="${images[0]}" alt="${item.name}" class="w-full h-full object-cover">
                        </div>
                    `;
                }
            }

            return `
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                    <div class="relative">
                        ${imageContentHtml}
                        <div class="absolute top-4 left-4 flex space-x-2">${tagsHtml}</div>
                        <button class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50">
                            <i class="far fa-heart text-gray-600"></i>
                        </button>
                        ${images.length > 1 ? `
                            <div class="absolute bottom-4 right-4 bg-teal-600 text-white rounded-full px-4 py-2 shadow-lg text-sm font-semibold cursor-pointer hover:bg-teal-700 transition duration-200">
                                View All ${images.length} Photos
                            </div>
                        ` : ''}
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900">${item.name}</h3>
                                <span class="text-sm text-gray-600">${item.subtitle}</span>
                            </div>
                            <div class="text-right">
                                <div class="text-3xl font-bold text-teal-600">₱${item.price}</div>
                                <div class="text-gray-600 text-sm">${item.type === 'reception' ? 'Package Price' : 'Venue Rental'}</div>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-4">${item.description}</p>
                        <div class="grid grid-cols-2 gap-4 mb-4 text-sm">${featuresHtml}</div>
                        <div class="flex space-x-3">
                            <button onclick='openBookingModal(${JSON.stringify(item.name)}, ${JSON.stringify(item.subtitle)}, ${JSON.stringify(item.price)}, ${JSON.stringify(item.type)}, ${JSON.stringify(item.description)}, ${JSON.stringify(item.features)})' class="flex-1 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 font-semibold transition duration-200">
                                ${item.buttonText}
                            </button>
                            <button class="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                                <i class="fas fa-info-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        function openBookingModal(name, subtitle, price, type, description, features) {
            document.getElementById('modalEventName').textContent = name;
            document.getElementById('modalEventSubtitle').textContent = subtitle;
            document.getElementById('modalEventPrice').textContent = '₱' + price;
            document.getElementById('modalEventType').textContent = type === 'reception' ? 'All-in Package Price' : 'Venue Rental Only';
            document.getElementById('modalEventDescription').textContent = description;
            
            const featuresContainer = document.getElementById('modalEventFeatures');
            featuresContainer.innerHTML = features.map(f => `
                <div class="flex items-center">
                    <i class="${f.icon} text-teal-600 mr-2"></i>
                    <span class="text-gray-700">${f.text}</span>
                </div>
            `).join('');
            
            document.getElementById('bookingModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeBookingModal() {
            document.getElementById('bookingModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
            document.getElementById('bookingForm').reset();
        }

        document.addEventListener('DOMContentLoaded', () => {
            const receptionContainer = document.getElementById('reception-packages-list');
            const venuesContainer = document.getElementById('venues-list');
            
            eventsData.forEach(item => {
                if (item.type === 'reception') {
                    receptionContainer.insertAdjacentHTML('beforeend', generateEventCard(item));
                } else if (item.type === 'venue') {
                    venuesContainer.insertAdjacentHTML('beforeend', generateEventCard(item));
                }
            });

            document.getElementById('closeModal').addEventListener('click', closeBookingModal);
            document.getElementById('cancelBooking').addEventListener('click', closeBookingModal);
            
            document.getElementById('bookingForm').addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Event inquiry submitted successfully! Our events coordinator will contact you within 24 hours to discuss your requirements and confirm availability.');
                closeBookingModal();
            });

            document.getElementById('bookingModal').addEventListener('click', (e) => {
                if (e.target.id === 'bookingModal') closeBookingModal();
            });
        });

        const menuBtn = document.getElementById("menuBtn");
        const mobileMenu = document.getElementById("mobileMenu");
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
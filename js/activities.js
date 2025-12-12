   // Activities data
        const activitiesData = [
            {
                name: "Mini Golf",
                subtitle: "Fun Outdoor Game",
                price: "200",
                description: "Enjoy a relaxing round of mini golf surrounded by Shercon's peaceful greenery. Perfect for families, friends, and casual players.",
                image: ["Pics/Activity/golf.jpg"],
                tags: ["Free", "Water Activities"],
                buttonText: "Book Slot",
                features: [
                    { icon: 'fas fa-flag', text: 'Multiple Courses' },
                    { icon: 'fas fa-sun', text: 'Outdoor Activity' },
                    { icon: 'fas fa-clock', text: 'Open All Day' },
                    { icon: 'fas fa-users', text: 'Good for Groups' }
                ]
            },
            {
                name: "Go Kart",
                subtitle: "Thrilling Driving Experience",
                price: "100.00",
                description: "Feel the rush as you race around our go-kart track. Safe, exciting, and perfect for beginners or competitive racers.",
                image: ["Pics/Activity/Kart.jpg"],
                tags: ["Indoor Games", "Paid"],
                buttonText: "Reserve Slot",
                features: [
                    { icon: 'fas fa-car', text: 'High-Speed Karts' },
                    { icon: 'fas fa-road', text: 'Safe Track' },
                    { icon: 'fas fa-clock', text: 'Per 10-Min Session' },
                    { icon: 'fas fa-users', text: 'Solo or Duo Ride' }
                ]
            },
            {
                name: "ATV Adventure",
                subtitle: "Off-Road Outdoor Ride",
                price: "200.00",
                description: "Take on muddy trails and rough terrain with our ATV ride. A perfect mix of adrenaline and outdoor exploration.",
                image: ["Pics/Activity/ATV.jpg"],
                tags: ["Outdoor Adventures", "Paid"],
                buttonText: "Start Adventure",
                features: [
                    { icon: 'fas fa-motorcycle', text: 'Powerful ATVs' },
                    { icon: 'fas fa-tree', text: 'Nature Trails' },
                    { icon: 'fas fa-clock', text: '15-Min Ride' },
                    { icon: 'fas fa-users', text: 'Solo Activity' }
                ]
            },
            {
                name: "Airsoft Shooting",
                subtitle: "Target Shooting Experience",
                price: "100.00",
                description: "Improve your aim with our airsoft shooting range. A fun and safe activity for beginners and enthusiasts.",
                image: ["Pics/Activity/Airsoft.jpg"],
                tags: ["Outdoor Adventures", "Paid"],
                buttonText: "Join Session",
                features: [
                    { icon: 'fas fa-bullseye', text: 'Target Practice' },
                    { icon: 'fas fa-shield-alt', text: 'Protective Gear Provided' },
                    { icon: 'fas fa-clock', text: 'Per Round Session' },
                    { icon: 'fas fa-users', text: 'Solo or Group' }
                ]
            },
            {
                name: "Archery",
                subtitle: "Precision Shooting Activity",
                price: "100.00",
                description: "Learn the basics of archery or test your skills at our outdoor range. Fun, challenging, and beginner-friendly.",
                image: ["Pics/Activity/Archery.jpg"],
                tags: ["Outdoor Adventures", "Paid"],
                buttonText: "Start Shooting",
                features: [
                    { icon: 'fas fa-bullseye', text: 'Beginner-Friendly' },
                    { icon: 'fas fa-bow-arrow', text: 'Quality Bows Provided' },
                    { icon: 'fas fa-clock', text: '20-Min Session' },
                    { icon: 'fas fa-users', text: 'Solo Activity' }
                ]
            },
            {
                name: "Tower Activities",
                subtitle: "Fun Climbing & Obstacle Challenges",
                price: "Free",
                description: "Enjoy a variety of tower challenges designed for fun, balance, and light adventure. Great for teens and families.",
                image: ["Pics/Activity/Tower.jpg"],
                tags: ["Free", "Outdoor"],
                buttonText: "Try Activities",
                features: [
                    { icon: 'fas fa-mountain', text: 'Multiple Challenges' },
                    { icon: 'fas fa-leaf', text: 'Outdoor Setting' },
                    { icon: 'fas fa-clock', text: 'Open All Day' },
                    { icon: 'fas fa-users', text: 'Good for Groups' }
                ]
            }
        ];

        // Generate activity cards
        function generateActivityCard(activity) {
            const tagsHtml = activity.tags.map(tag => {
                let colorClass = 'bg-teal-600';
                if (tag === 'Free') colorClass = 'bg-green-600';
                if (tag === 'Paid') colorClass = 'bg-orange-500';
                if (tag === 'Water Activities') colorClass = 'bg-blue-500';
                if (tag === 'Indoor Games') colorClass = 'bg-purple-600';
                if (tag === 'Outdoor Adventures') colorClass = 'bg-red-600';
                return `<span class="${colorClass} text-white px-3 py-1 rounded-full text-sm font-semibold">${tag}</span>`;
            }).join('');

            const featuresHtml = activity.features.map(feature => `
                <div class="flex items-center">
                    <i class="${feature.icon} text-teal-600 mr-2"></i>
                    <span>${feature.text}</span>
                </div>
            `).join('');

            const images = Array.isArray(activity.image) ? activity.image : [activity.image].filter(Boolean);
            let imageContentHtml = '';

            if (images.length > 0) {
                if (images.length > 1) {
                    imageContentHtml = `
                        <div class="grid grid-cols-3 h-64 gap-1 p-1">
                            <div class="col-span-2 h-full overflow-hidden rounded-xl">
                                <img src="${images[0]}" alt="${activity.name}" class="w-full h-full object-cover">
                            </div>
                            <div class="col-span-1 h-full overflow-hidden rounded-xl">
                                <img src="${images[1]}" alt="${activity.name}" class="w-full h-full object-cover">
                            </div>
                        </div>
                    `;
                } else {
                    imageContentHtml = `
                        <div class="h-64 overflow-hidden">
                            <img src="${images[0]}" alt="${activity.name}" class="w-full h-full object-cover">
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
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900">${activity.name}</h3>
                                <span class="text-sm text-gray-600">${activity.subtitle}</span>
                            </div>
                            <div class="text-right">
                                <div class="text-3xl font-bold text-teal-600">${activity.price === 'Free' ? 'Free' : '₱' + activity.price}</div>
                                <div class="text-gray-600 text-sm">${activity.price === 'Free' ? 'No Fee' : '+ Service Charge'}</div>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-4">${activity.description}</p>
                        <div class="grid grid-cols-2 gap-4 mb-4 text-sm">${featuresHtml}</div>
                        <div class="flex space-x-3">
                            <button onclick="openBookingModal('${activity.name}', '${activity.subtitle}', '${activity.price}', '${activity.description}')" class="flex-1 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 font-semibold transition duration-200">
                                ${activity.buttonText}
                            </button>
                            <button class="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                                <i class="fas fa-info-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Modal functions
        function openBookingModal(name, subtitle, price, description) {
            document.getElementById('modalActivityName').textContent = name;
            document.getElementById('modalActivitySubtitle').textContent = subtitle;
            document.getElementById('modalActivityPrice').textContent = price === 'Free' ? 'Free' : '₱' + price;
            document.getElementById('modalActivityDescription').textContent = description;
            document.getElementById('bookingModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeBookingModal() {
            document.getElementById('bookingModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
            document.getElementById('bookingForm').reset();
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', () => {
            const listContainer = document.getElementById('activity-list');
            listContainer.innerHTML = activitiesData.map(activity => generateActivityCard(activity)).join('');

            document.getElementById('closeModal').addEventListener('click', closeBookingModal);
            document.getElementById('cancelBooking').addEventListener('click', closeBookingModal);
            
            document.getElementById('bookingForm').addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Booking submitted successfully! We will contact you shortly to confirm your reservation.');
                closeBookingModal();
            });

            document.getElementById('bookingModal').addEventListener('click', (e) => {
                if (e.target.id === 'bookingModal') closeBookingModal();
            });
        });

        // Mobile menu toggle
        const menuBtn = document.getElementById("menuBtn");
        const mobileMenu = document.getElementById("mobileMenu");
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
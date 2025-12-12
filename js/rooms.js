const cottagesData = [
            {
                name: "KUBO SINGLE",
                subtitle: "Standard Open-Air Cottage",
                price: "1,000.00",
                description: "A compact open cottage perfect for small groups enjoying a day tour.",
                image: ["Pics/Kubo/kubo1.jpg"],
                tags: ["Daytour", "Popular"],
                buttonText: "Reserve Cottage",
                features: [
                    { icon: 'fas fa-users', text: 'Max 6 guests' },
                    { icon: 'fas fa-sun', text: 'Day Use Only' },
                    { icon: 'fas fa-tree', text: 'Open-Air Design' },
                    { icon: 'fas fa-chair', text: 'Seating Provided' }
                ],
                type: "Daytour"
            },
            {
                name: "KUBO TWIN",
                subtitle: "Standard Open-Air Cottage",
                price: "2,000.00",
                description: "Larger open cottage for family outings or medium-sized day tour groups.",
                image: ["Pics/Kubo/kubo 2.jpg"],
                tags: ["Daytour", "Popular"],
                buttonText: "Reserve Cottage",
                features: [
                    { icon: 'fas fa-users', text: 'Max 12 guests' },
                    { icon: 'fas fa-sun', text: 'Day Use Only' },
                    { icon: 'fas fa-tree', text: 'Open-Air Design' },
                    { icon: 'fas fa-chair', text: 'Seating Provided' }
                ],
                type: "Daytour"
            },
            {
                name: "KUBO FAMILY",
                subtitle: "Large Open-Air Cottage",
                price: "2,500.00",
                description: "A generously sized open cottage ideal for large family gatherings or groups.",
                image: ["Pics/Kubo/kubo f.jpg"],
                tags: ["Daytour"],
                buttonText: "Reserve Cottage",
                features: [
                    { icon: 'fas fa-users', text: 'Max 20 guests' },
                    { icon: 'fas fa-sun', text: 'Day Use Only' },
                    { icon: 'fas fa-tree', text: 'Open-Air Design' },
                    { icon: 'fas fa-chair', text: 'Seating Provided' }
                ],
                type: "Daytour"
            },
            {
                name: "Pool Villa",
                subtitle: "Private Pool Access Suite",
                price: "12,000.00",
                description: "A luxury suite with exclusive access to a private pool, ideal for family retreats.",
                image: ["Pics/Overnight/PV1.jpg", "Pics/Overnight/PV2.jpg", "Pics/Overnight/PV3.jpg", "Pics/Overnight/PV4.jpg"],
                tags: ["Overnight", "Luxury", "Private Pool"],
                buttonText: "Book Now",
                features: [
                    { icon: 'fas fa-users', text: 'Max 8 guests' },
                    { icon: 'fas fa-moon', text: 'Overnight Stay' },
                    { icon: 'fas fa-bed', text: '2 Bedrooms' },
                    { icon: 'fas fa-water', text: 'Private Pool' }
                ],
                type: "Overnight"
            },
            {
                name: "Club Manuel Suites",
                subtitle: "Standard Family Room",
                price: "4,000.00",
                description: "Comfortable and affordable room accommodation for small groups or families.",
                image: ["Pics/Overnight/CBS1.jpg", "Pics/Overnight/CBS2.jpg", "Pics/Overnight/CBS3.jpg", "Pics/Overnight/CBS4.jpg"],
                tags: ["Overnight", "Budget"],
                buttonText: "Book Now",
                features: [
                    { icon: 'fas fa-users', text: 'Max 4 guests' },
                    { icon: 'fas fa-moon', text: 'Overnight Stay' },
                    { icon: 'fas fa-snowflake', text: 'Air-conditioned' },
                    { icon: 'fas fa-bath', text: 'Private Bath' }
                ],
                type: "Overnight"
            },
            // Cliffview Residences Data
            {
                name: "Package 1 - Cliffview Residence",
                subtitle: "Luxury View Deck Residence",
                price: "15,000.00",
                description: "Exclusive residence units offering a stunning panoramic cliff view and premium amenities.",
                image: ["Pics/Cliffview/Cliffview_Residence.jpg", "Pics/Tree house/1-165-orig.jpeg"],
                tags: ["Cliffview", "Luxury", "Best View"],
                buttonText: "Inquire Now",
                features: [
                    { icon: 'fas fa-users', text: 'Max **10 guests**' },
                    { icon: 'fas fa-moon', text: 'Overnight Stay' },
                    { icon: 'fas fa-mountain', text: 'Cliff View' },
                    { icon: 'fas fa-kitchen-set', text: 'Kitchenette' }
                ],
                type: "Cliffview"
            },
            {
                name: "Package 2 - Cliffview Residence",
                subtitle: "Duplex with Infinity Pool Access",
                price: "6,000.00",
                description: "A two-story unit with direct access to the resort's signature infinity pool.",
                image: ["Pics/Cliffview/CV2.JPG"],
                tags: ["Cliffview", "Infinity Pool", "Premium"],
                buttonText: "Book Now",
                features: [
                    { icon: 'fas fa-users', text: 'Max **4 guests**' },
                    { icon: 'fas fa-moon', text: 'Overnight Stay' },
                    { icon: 'fas fa-water', text: 'Pool Access' },
                    { icon: 'fas fa-toilet', text: 'Private Restroom' }
                ],
                type: "Cliffview"
            },
            {
                name: "Package 3 - Cliffview Residence ",
                subtitle: "Large Family Guesthouse",
                price: "8,000.00",
                description: "A spacious, standalone house suitable for large families or groups looking for privacy.",
                image: ["Pics/Cliffview/CV3.JPG"],
                tags: ["Cliffview", "Large Group", "Private"],
                buttonText: "Book Now",
                features: [
                    { icon: 'fas fa-users', text: 'Max **15 guests**' },
                    { icon: 'fas fa-moon', text: 'Overnight Stay' },
                    { icon: 'fas fa-home', text: 'Entire House' },
                    { icon: 'fas fa-utensils', text: 'Dining Area' }
                ],
                type: "Cliffview"
            },
            {
            name: "Leisure Hall",
            subtitle: "Intimate Parties & Receptions",
            price: "10,000.00",
            description: "A beautiful open-air gazebo set in a lush garden, ideal for small, romantic events.",
            image: ["Pics/Leisure hall/leisure-hall.jpeg"],
            tags: ["Function", "Outdoor", "Intimate"],
            buttonText: "Inquire Now",
            features: [
                { icon: 'fas fa-users', text: 'Max 50 guests' },
                { icon: 'fas fa-calendar-check', text: 'Reservations Only' },
                { icon: 'fas fa-tree', text: 'Garden Setting' },
                { icon: 'fas fa-lightbulb', text: 'Mood Lighting' }
            ],
            type: "Function"
        },
        {
            name: "Bougainvillae Hall",
            subtitle: "Intimate Parties & Receptions",
            price: "10,000.00",
            description: "A beautiful open-air gazebo set in a lush garden, ideal for small, romantic events.",
            image: ["Pics/BH/bougainvillea-hall.jpeg"],
            tags: ["Function", "Outdoor", "Intimate"],
            buttonText: "Inquire Now",
            features: [
                { icon: 'fas fa-users', text: 'Max 50 guests' },
                { icon: 'fas fa-calendar-check', text: 'Reservations Only' },
                { icon: 'fas fa-tree', text: 'Garden Setting' },
                { icon: 'fas fa-lightbulb', text: 'Mood Lighting' }
            ],
            type: "Function"
        },
        {
            name: "Infinity Hall",
            subtitle: "Intimate Parties & Receptions",
            price: "10,000.00",
            description: "A beautiful open-air gazebo set in a lush garden, ideal for small, romantic events.",
            image: ["Pics/infinity hall/infinity-pavilion-2-orig.jpeg"],
            tags: ["Function", "Outdoor", "Intimate"],
            buttonText: "Inquire Now",
            features: [
                { icon: 'fas fa-users', text: 'Max 50 guests' },
                { icon: 'fas fa-calendar-check', text: 'Reservations Only' },
                { icon: 'fas fa-tree', text: 'Garden Setting' },
                { icon: 'fas fa-lightbulb', text: 'Mood Lighting' }
            ],
            type: "Function"
        },
        {
            name: "Tree House Pavilion",
            subtitle: "Intimate Parties & Receptions",
            price: "10,000.00",
            description: "A beautiful open-air gazebo set in a lush garden, ideal for small, romantic events.",
            image: ["Pics/Tree house/1-165-orig.jpeg"],
            tags: ["Function", "Outdoor", "Intimate"],
            buttonText: "Inquire Now",
            features: [
                { icon: 'fas fa-users', text: 'Max 50 guests' },
                { icon: 'fas fa-calendar-check', text: 'Reservations Only' },
                { icon: 'fas fa-tree', text: 'Garden Setting' },
                { icon: 'fas fa-lightbulb', text: 'Mood Lighting' }
            ],
            type: "Function"
        },
        {
            name: "L Pavilion",
            subtitle: "Intimate Parties & Receptions",
            price: "10,000.00",
            description: "A beautiful open-air gazebo set in a lush garden, ideal for small, romantic events.",
            image: ["Pics/L Pavilion/l-pav-02.jpg"],
            tags: ["Function", "Outdoor", "Intimate"],
            buttonText: "Inquire Now",
            features: [
                { icon: 'fas fa-users', text: 'Max 50 guests' },
                { icon: 'fas fa-calendar-check', text: 'Reservations Only' },
                { icon: 'fas fa-tree', text: 'Garden Setting' },
                { icon: 'fas fa-lightbulb', text: 'Mood Lighting' }
            ],
            type: "Function"
        }
    ];


        function generateCottageCard(cottage) {
            const tagsHtml = cottage.tags.map(tag => {
                let colorClass = 'bg-teal-600';
                if (tag === 'Popular') colorClass = 'bg-orange-500';
                if (tag === 'Premium' || tag === 'Luxury') colorClass = 'bg-amber-600';
                if (tag === 'Budget') colorClass = 'bg-green-600';
                if (tag === 'High Capacity') colorClass = 'bg-red-600';
                if (tag === 'Overnight') colorClass = 'bg-indigo-600';
                if (tag === 'Cliffview') colorClass = 'bg-purple-600';
                if (tag === 'Function') colorClass = 'bg-pink-600';
                return `<span class="${colorClass} text-white px-3 py-1 rounded-full text-sm font-semibold">${tag}</span>`;
            }).join('');

            const featuresHtml = cottage.features.map(feature => `
                <div class="flex items-center">
                    <i class="${feature.icon} text-teal-600 mr-2"></i>
                    <span>${feature.text}</span>
                </div>
            `).join('');

            const images = Array.isArray(cottage.image) ? cottage.image : [cottage.image].filter(Boolean);
            let imageContentHtml = '';

            if (images.length > 0) {
                if (images.length > 1) {
                    imageContentHtml = `
                        <div class="grid grid-cols-3 h-64 gap-1 p-1">
                            <div class="col-span-2 h-full overflow-hidden rounded-xl">
                                <img src="${images[0]}" alt="${cottage.name}" class="w-full h-full object-cover">
                            </div>
                            <div class="col-span-1 h-full overflow-hidden rounded-xl">
                                <img src="${images[1]}" alt="${cottage.name}" class="w-full h-full object-cover">
                            </div>
                        </div>
                    `;
                } else {
                    imageContentHtml = `
                        <div class="h-64 overflow-hidden rounded-t-xl">
                            <img src="${images[0]}" alt="${cottage.name}" class="w-full h-full object-cover">
                        </div>
                    `;
                }
            }

            const priceText = cottage.type === 'Daytour' ? '+ Entrance Fee' : 'per night';

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
                                <h3 class="text-2xl font-bold text-gray-900">${cottage.name}</h3>
                                <span class="text-sm text-gray-600">${cottage.subtitle}</span>
                            </div>
                            <div class="text-right">
                                <div class="text-3xl font-bold text-teal-600">₱${cottage.price}</div>
                                <div class="text-gray-600 text-sm">${priceText}</div>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-4">${cottage.description}</p>
                        <div class="grid grid-cols-2 gap-4 mb-4 text-sm">${featuresHtml}</div>
                        <div class="flex space-x-3">
                            <button onclick="openBookingModal('${cottage.name}', '${cottage.subtitle}', '${cottage.price}', '${cottage.type}', '${cottage.description}')" class="flex-1 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 font-semibold transition duration-200">
                                ${cottage.buttonText}
                            </button>
                            <button class="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                                <i class="fas fa-info-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        function openBookingModal(name, subtitle, price, type, description) {
            document.getElementById('modalRoomName').textContent = name;
            document.getElementById('modalRoomSubtitle').textContent = subtitle;
            document.getElementById('modalRoomPrice').textContent = '₱' + price;
            document.getElementById('modalRoomType').textContent = type === 'Daytour' ? '+ Entrance Fee' : 'Per Night Rate';
            document.getElementById('modalRoomDescription').textContent = description;
            document.getElementById('bookingModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeBookingModal() {
            document.getElementById('bookingModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
            document.getElementById('bookingForm').reset();
        }

        document.addEventListener('DOMContentLoaded', () => {
            const categorizedData = cottagesData.reduce((acc, cottage) => {
                if (!acc[cottage.type]) acc[cottage.type] = [];
                acc[cottage.type].push(cottage);
                return acc;
            }, {});

            const containers = {
                'Daytour': document.getElementById('Daytour-list'),
                'Overnight': document.getElementById('Overnight-list'),
                'Cliffview': document.getElementById('Cliffview-list'),
                'Function': document.getElementById('Function-list')
            };

            for (const type in categorizedData) {
                if (containers[type]) {
                    containers[type].innerHTML = categorizedData[type].map(cottage => generateCottageCard(cottage)).join('');
                }
            }

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

        const menuBtn = document.getElementById("menuBtn");
        const mobileMenu = document.getElementById("mobileMenu");
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
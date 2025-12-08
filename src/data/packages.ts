export interface Package {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  // price: number;
  duration: number;
  category: 'adventure' | 'cultural' | 'spiritual' | 'beach' | 'mountain' | 'nature';
  image: string;
  gallery: string[];
  highlights: string[];
  highlightsHi: string[];
  itinerary: {
    day: number;
    title: string;
    titleHi: string;
    description: string;
    descriptionHi: string;
  }[];
  included: string[];
  includedHi: string[];
  excluded: string[];
  excludedHi: string[];
}

export const packages: Package[] = [
  {
    id: 'kashmir-paradise',
    title: 'Kashmir Paradise',
    titleHi: 'कश्मीर स्वर्ग',
    description: 'Experience the breathtaking beauty of Kashmir with snow-capped mountains, pristine lakes, and Mughal gardens',
    descriptionHi: 'बर्फ से ढके पहाड़ों, प्राचीन झीलों और मुगल उद्यानों के साथ कश्मीर की लुभावनी सुंदरता का अनुभव करें',
    // price: 45000,
    duration: 7,
    category: 'mountain',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
    ],
    highlights: [
      'Dal Lake Shikara Ride',
      'Gulmarg Gondola Experience',
      'Mughal Gardens Tour',
      'Pahalgam Valley Visit',
      'Authentic Kashmiri Cuisine'
    ],
    highlightsHi: [
      'डल झील शिकारा सवारी',
      'गुलमर्ग गोंडोला अनुभव',
      'मुगल गार्डन टूर',
      'पहलगाम घाटी यात्रा',
      'प्रामाणिक कश्मीरी व्यंजन'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        titleHi: 'श्रीनगर में आगमन',
        description: 'Arrive at Srinagar airport, transfer to houseboat, evening Shikara ride on Dal Lake',
        descriptionHi: 'श्रीनगर हवाई अड्डे पर पहुंचें, हाउसबोट में स्थानांतरण, डल झील पर शाम की शिकारा सवारी'
      },
      {
        day: 2,
        title: 'Srinagar Sightseeing',
        titleHi: 'श्रीनगर दर्शनीय स्थल',
        description: 'Visit Mughal Gardens - Nishat Bagh, Shalimar Bagh, and Chashme Shahi',
        descriptionHi: 'मुगल गार्डन की यात्रा - निशात बाग, शालीमार बाग, और चश्मे शाही'
      },
      {
        day: 3,
        title: 'Gulmarg Excursion',
        titleHi: 'गुलमर्ग भ्रमण',
        description: 'Full day trip to Gulmarg, Gondola ride, meadow walks',
        descriptionHi: 'गुलमर्ग की पूरे दिन की यात्रा, गोंडोला सवारी, घास के मैदान में सैर'
      }
    ],
    included: [
      'Accommodation in hotels/houseboats',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Shikara ride on Dal Lake',
      'Professional tour guide'
    ],
    includedHi: [
      'होटल/हाउसबोट में आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'डल झील पर शिकारा सवारी',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch',
      'Personal expenses',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन',
      'व्यक्तिगत खर्चे',
      'यात्रा बीमा'
    ]
  },

  {
    id: 'rajasthan-royal',
    title: 'Royal Rajasthan Heritage',
    titleHi: 'राजस्थान शाही विरासत',
    description: 'Discover the royal heritage of Rajasthan with magnificent forts, palaces, and desert landscapes',
    descriptionHi: 'शानदार किलों, महलों और रेगिस्तानी परिदृश्य के साथ राजस्थान की शाही विरासत की खोज करें',
    // price: 38000,
    duration: 8,
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245',
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245'
    ],
    highlights: [
      'Amber Fort, Jaipur',
      'City Palace and Hawa Mahal',
      'Mehrangarh Fort, Jodhpur',
      'Camel Safari in Thar Desert',
      'Traditional Rajasthani Dinner'
    ],
    highlightsHi: [
      'आमेर किला, जयपुर',
      'सिटी पैलेस और हवा महल',
      'मेहरानगढ़ किला, जोधपुर',
      'थार रेगिस्तान में ऊंट सफारी',
      'पारंपरिक राजस्थानी रात्रिभोज'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jaipur',
        titleHi: 'जयपुर में आगमन',
        description: 'Welcome to the Pink City, transfer to hotel, evening free for leisure',
        descriptionHi: 'गुलाबी शहर में स्वागत है, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Jaipur Sightseeing',
        titleHi: 'जयपुर दर्शनीय स्थल',
        description: 'Visit Amber Fort, City Palace, and Hawa Mahal',
        descriptionHi: 'आमेर किला, सिटी पैलेस, और हवा महल की यात्रा करें'
      },
      {
        day: 3,
        title: 'Jodhpur Exploration',
        titleHi: 'जोधपुर अन्वेषण',
        description: 'Travel to Jodhpur, visit Mehrangarh Fort and local markets',
        descriptionHi: 'जोधपुर की यात्रा करें, मेहरानगढ़ किला और स्थानीय बाजारों की यात्रा करें'
      },
      {
        day: 4,
        title: 'Thar Desert Camel Safari',
        titleHi: 'थार रेगिस्तान ऊंट सफारी',
        description: 'Experience a camel safari in the Thar Desert, enjoy traditional Rajasthani dinner',
        descriptionHi: 'थार रेगिस्तान में ऊंट सफारी का अनुभव करें, पारंपरिक राजस्थानी रात्रिभोज का आनंद लें'
      },
      {
        day: 5,
        title: 'Departure from Jodhpur',
        titleHi: 'जोधपुर से प्रस्थान',
        description: 'Check out from hotel and transfer to airport or next destination',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      }

    ],
    included: [
      'Heritage hotel accommodation',
      'Daily breakfast',
      'All entrance fees',
      'Desert safari with cultural program',
      'Expert local guides'
    ],
    includedHi: [
      'विरासत होटल आवास',
      'दैनिक नाश्ता',
      'सभी प्रवेश शुल्क',
      'सांस्कृतिक कार्यक्रम के साथ रेगिस्तान सफारी',
      'विशेषज्ञ स्थानीय गाइड'
    ],
    excluded: [
      'Airfare',
      'Lunch and dinner',
      'Tips and gratuities',
      'Optional activities'
    ],
    excludedHi: [
      'हवाई किराया',
      'दोपहर का भोजन और रात का खाना',
      'टिप्स और ग्रेच्युटी',
      'वैकल्पिक गतिविधियाँ'
    ]
  },
  {
    id: 'kerala-backwaters',
    title: 'Kerala Backwaters Bliss',
    titleHi: 'केरल बैकवाटर आनंद',
    description: 'Cruise through serene backwaters, explore lush tea plantations, and relax on pristine beaches',
    descriptionHi: 'शांत बैकवाटर के माध्यम से यात्रा करें, हरे चाय बागानों का अन्वेषण करें, और प्राचीन समुद्र तटों पर आराम करें',
    // price: 35000,
    duration: 6,
    category: 'beach',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944'
    ],
    highlights: [
      'Houseboat stay in Alleppey',
      'Munnar tea estate visit',
      'Kathakali dance performance',
      'Kovalam beach relaxation',
      'Ayurvedic spa treatment'
    ],
    highlightsHi: [
      'अल्लेप्पी में हाउसबोट प्रवास',
      'मुन्नार चाय बागान यात्रा',
      'कथकली नृत्य प्रदर्शन',
      'कोवलम बीच विश्राम',
      'आयुर्वेदिक स्पा उपचार'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kochi',
        titleHi: 'कोच्चि में आगमन',
        description: 'Airport pickup, check-in to hotel, evening visit to Fort Kochi',
        descriptionHi: 'हवाई अड्डे से पिकअप, होटल में चेक-इन, शाम को फोर्ट कोच्चि की यात्रा'
      },
      {
        day: 2,
        title: 'Munnar Tea Estate Visit',
        titleHi: 'मुन्नार चाय बागान यात्रा',
        description: 'Explore the lush tea plantations of Munnar and enjoy scenic views',
        descriptionHi: 'मुन्नार के हरे-भरे चाय बागानों का अन्वेषण करें और सुंदर दृश्य का आनंद लें'
      },
      {
        day: 3,
        title: 'Houseboat Cruise in Alleppey',
        titleHi: 'अल्लेप्पी में हाउसबोट क्रूज',
        description: 'Board a traditional houseboat and cruise through the tranquil backwaters',
        descriptionHi: 'एक पारंपरिक हाउसबोट पर सवार हों और शांत बैकवाटर के माध्यम से क्रूज करें'
      },
      {
        day: 4,
        title: 'Kovalam Beach Relaxation',
        titleHi: 'कोवलम बीच विश्राम',
        description: 'Relax on the pristine beaches of Kovalam and enjoy water activities',
        descriptionHi: 'कोवलम के प्राचीन समुद्र तटों पर आराम करें और जल गतिविधियों का आनंद लें'
      },
      {
        day: 5,
        title: 'Ayurvedic Spa Treatment',
        titleHi: 'आयुर्वेदिक स्पा उपचार',
        description: 'Experience a rejuvenating Ayurvedic massage and spa session',
        descriptionHi: 'एक पुनरुत्थानकारी आयुर्वेदिक मालिश और स्पा सत्र का अनुभव करें'
      },

      {
        day: 6,
        title: 'Departure from Kochi',
        titleHi: 'कोच्चि से प्रस्थान',
        description: 'Check out from hotel and transfer to airport for departure',
        descriptionHi: 'होटल से चेक आउट करें और प्रस्थान के लिए हवाई अड्डे पर स्थानांतरण करें'
      }

    ],
    included: [
      'Deluxe houseboat accommodation',
      'All meals on houseboat',
      'Tea plantation tour',
      'Ayurvedic massage session',
      'Airport transfers'
    ],
    includedHi: [
      'डीलक्स हाउसबोट आवास',
      'हाउसबोट पर सभी भोजन',
      'चाय बागान टूर',
      'आयुर्वेदिक मालिश सत्र',
      'हवाई अड्डा स्थानांतरण'
    ],
    excluded: [
      'Flight tickets',
      'Alcoholic beverages',
      'Personal shopping',
      'Adventure activities'
    ],
    excludedHi: [
      'हवाई टिकट',
      'मादक पेय',
      'व्यक्तिगत खरीदारी',
      'साहसिक गतिविधियाँ'
    ]
  },


  {
    id: 'Manali',
    title: 'Manali Heaven',
    titleHi: 'मणाली स्वर्ग',
    description: 'Experience the breathtaking beauty of Manali with snow-capped mountains, ancient lakes, and Mughal gardens',
    descriptionHi: 'बर्फ से ढके पहाड़ों, प्राचीन झीलों, और मुगल बागानों के साथ मणाली की सांस लेने वाली सुंदरता का अनुभव करें',
    // price: 45000,
    duration: 8,
    category: 'mountain',
    image: '/public/manali.jpg',
    gallery: [
      '/images/manali1.jpg',
      '/images/manali2.jpg',
      '/images/manali3.jpg'
    ],
    highlights: [
      'Solang Valley Adventure Sports',
      'Dal Lake Shikara Ride',
      'Gulmarg Gondola Experience',
      'Mughal Garden Tours',
      'Pahalgam Valley Trip'
    ],
    highlightsHi: [
      'सोलंग घाटी साहसिक खेल',
      'डल झील शिकारा सवारी',
      'गुलमर्ग गोंडोला अनुभव',
      'मुगल बागान पर्यटन',
      'पाहलगाम घाटी यात्रा'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Manali',
        titleHi: 'मणाली में आगमन',
        description: 'Arrive at Manali, transfer to hotel, evening free for leisure',
        descriptionHi: 'मणाली में पहुंचें, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Manali Sightseeing',
        titleHi: 'मणाली दर्शनीय स्थल',
        description: 'Visit Solang Valley, Hadimba Temple, and Manu Temple',
        descriptionHi: 'सोलंग घाटी, हडिम्बा मंदिर, और मनु मंदिर की यात्रा करें'
      },
      {
        day: 3,
        title: 'Dal Lake & Mughal Gardens',
        titleHi: 'डल झील और मुगल बागान',
        description: 'Shikara ride on Dal Lake and explore Mughal Gardens',
        descriptionHi: 'डल झील पर शिकारा सवारी और मुगल बागानों का अन्वेषण करें'
      },
      {
        day: 4,
        title: 'Pahalgam Valley Trip',
        titleHi: 'पाहलगाम घाटी यात्रा',
        description: 'Day trip to Pahalgam Valley, enjoy scenic views and local culture',
        descriptionHi: 'पाहलगाम घाटी की दिन भर की यात्रा, सुंदर दृश्य और स्थानीय संस्कृति का आनंद लें'
      },
      {
        day: 5,
        title: 'Departure from Manali',
        titleHi: 'मणाली से प्रस्थान',
        description: 'Check out from hotel and transfer to airport or next destination',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      }
    ],
    included: [
      'Hotel accommodation in Manali',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Shikara ride on Dal Lake',
      'Professional tour guide'
    ],
    includedHi: [
      'मणाली में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'डल झील पर शिकारा सवारी',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },


  {
    id: 'Munnar',
    title: 'Munnar Bliss',
    titleHi: 'मुनार आनंद',
    description: 'Explore the lush tea plantations, waterfalls, and wildlife of Munnar, the Scotland of India',
    descriptionHi: 'मुनार के हरे-भरे चाय बागानों, झरनों, और वन्यजीवों का अन्वेषण करें, जो भारत का स्कॉटलैंड है',
    // price: 45000,
    duration: 4,
    category: 'mountain',
    image: '/public/munnar.jpg',
    gallery: [
      '/images/munnar1.jpg',
      '/images/munnar2.jpg',
      '/images/munnar3.jpg'
    ],
    highlights: [
      'Visit tea plantations',
      'Waterfalls and nature walks',
      'Wildlife spotting',
      'Local Munnar cuisine tasting',
      'Trekking in Western Ghats'
    ],
    highlightsHi: [
      'चाय बागानों की यात्रा',
      'झरनों और प्रकृति की सैर',
      'वन्यजीवों का अवलोकन',
      'स्थानीय मुनार व्यंजन चखना',
      'पश्चिमी घाटों में ट्रेकिंग'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Munnar',
        titleHi: 'मुनार में आगमन',
        description: 'Transfer to hotel, evening nature walk',
        descriptionHi: 'होटल में स्थानांतरण, शाम को प्रकृति की सैर'
      },
      {
        day: 2,
        title: 'Munnar Sightseeing',
        titleHi: 'मुनार दर्शनीय स्थल',
        description: 'Visit tea plantations, waterfalls, and wildlife spots',
        descriptionHi: 'चाय बागानों, झरनों, और वन्यजीव स्थलों की यात्रा करें'
      },
      {
        day: 3,
        title: 'Local Culture & Trekking',
        titleHi: 'स्थानीय संस्कृति और ट्रेकिंग',
        description: 'Experience local Munnar cuisine and trek in the Western Ghats',
        descriptionHi: 'स्थानीय मुनार व्यंजन का अनुभव करें और पश्चिमी घाटों में ट्रेकिंग करें'
      },
      {
        day: 4,
        title: 'Departure from Munnar',
        titleHi: 'मुनार से प्रस्थान',
        description: 'Check out from hotel and transfer to airport or next destination',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      },
    ],
    included: [
      'Hotel accommodation in Munnar',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Local cuisine tasting',
      'Professional tour guide'
    ],
    includedHi: [
      'मुनार में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'स्थानीय व्यंजन चखना',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },






  {
    id: 'spiritual-varanasi',
    title: 'Spiritual Varanasi & Ganga',
    titleHi: 'आध्यात्मिक वाराणसी और गंगा',
    description: 'Experience the spiritual heart of India with ancient temples, Ganga Aarti, and sacred rituals',
    descriptionHi: 'प्राचीन मंदिरों, गंगा आरती, और पवित्र अनुष्ठानों के साथ भारत के आध्यात्मिक हृदय का अनुभव करें',
    // price: 25000,
    duration: 5,
    category: 'spiritual',
    image: '/public/Varanasi.jpg',
    gallery: [
      '/public/Varanasi1.jpg',
      '/public/Varanasi2.jpg',
      '/public/Varanasi3.jpg'
    ],
    highlights: [
      'Sunrise boat ride on Ganges',
      'Evening Ganga Aarti ceremony',
      'Visit Kashi Vishwanath Temple',
      'Sarnath Buddhist pilgrimage',
      'Yoga and meditation session'
    ],
    highlightsHi: [
      'गंगा पर सूर्योदय नाव की सवारी',
      'शाम की गंगा आरती समारोह',
      'काशी विश्वनाथ मंदिर की यात्रा',
      'सारनाथ बौद्ध तीर्थयात्रा',
      'योग और ध्यान सत्र'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Varanasi',
        titleHi: 'वाराणसी में आगमन',
        description: 'Transfer to hotel, evening Ganga Aarti at Dashashwamedh Ghat',
        descriptionHi: 'होटल में स्थानांतरण, दशाश्वमेध घाट पर शाम की गंगा आरती'
      },
      {
        day: 2,
        title: 'Varanasi Sightseeing',
        titleHi: 'वाराणसी दर्शनीय स्थल',
        description: 'Visit Kashi Vishwanath Temple, Sarnath, and local markets',
        descriptionHi: 'काशी विश्वनाथ मंदिर, सारनाथ, और स्थानीय बाजारों की यात्रा करें'
      },
      {
        day: 3,
        title: 'Yoga and Meditation',
        titleHi: 'योग और ध्यान',
        description: 'Participate in yoga and meditation sessions by the Ganges',
        descriptionHi: 'गंगा के किनारे योग और ध्यान सत्र में भाग लें'
      },
      {
        day: 4,
        title: 'Departure from Varanasi',
        titleHi: 'वाराणसी से प्रस्थान',
        description: 'Check out from hotel and transfer to airport or next destination',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      }
    ],
    included: [
      'Hotel near ghats',
      'Daily breakfast',
      'Boat rides on Ganges',
      'Temple visits with guide',
      'Yoga session'
    ],
    includedHi: [
      'घाट के पास होटल',
      'दैनिक नाश्ता',
      'गंगा पर नाव की सवारी',
      'गाइड के साथ मंदिर यात्रा',
      'योग सत्र'
    ],
    excluded: [
      'Transportation to Varanasi',
      'Lunch and dinner',
      'Puja offerings',
      'Shopping'
    ],
    excludedHi: [
      'वाराणसी के लिए परिवहन',
      'दोपहर का भोजन और रात का खाना',
      'पूजा की पेशकश',
      'खरीदारी'
    ]
  },


  {
    id: 'wayanad-nature',
    title: 'Wayanad Nature Escape',
    titleHi: 'वायनाड नेचर एस्केप',
    description: 'Discover the serene beauty of Wayanad with its lush forests, waterfalls, and wildlife sanctuaries',
    descriptionHi: 'वायनाड के हरे-भरे जंगलों, झरनों, और वन्यजीव अभयारण्यों की शांति का अनुभव करें',
    // price: 45000,
    duration: 4,
    category: 'adventure',
    image: '/public/wayanad.jpg',
    gallery: [
      '/images/wayanad1.jpg',
      '/images/wayanad2.jpg',
      '/images/wayanad3.jpg'
    ],
    highlights: [
      'Visit tea plantations',
      'Waterfalls and nature walks',
      'Wildlife spotting',
      'Local Wayanad cuisine tasting',
      'Trekking in Western Ghats'
    ],
    highlightsHi: [
      'चाय बागानों की यात्रा',
      'झरनों और प्रकृति की सैर',
      'वन्यजीवों का अवलोकन',
      'स्थानीय वायनाड व्यंजन चखना',
      'पश्चिमी घाटों में ट्रेकिंग'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Wayanad',
        titleHi: 'वायनाड में आगमन',
        description: 'Transfer to hotel, evening nature walk',
        descriptionHi: 'होटल में स्थानांतरण, शाम को प्रकृति की सैर'
      },
      {
        day: 2,
        title: 'Wayanad Sightseeing',
        titleHi: 'वायनाड दर्शनीय स्थल',
        description: 'Visit tea plantations, waterfalls, and wildlife spots',
        descriptionHi: 'चाय बागानों, झरनों, और वन्यजीव स्थलों की यात्रा करें'
      },
      {
        day: 3,
        title: 'Local Culture & Trekking',
        titleHi: 'स्थानीय संस्कृति और ट्रेकिंग',
        description: 'Experience local Wayanad cuisine and trek in the Western Ghats',
        descriptionHi: 'स्थानीय वायनाड व्यंजन का अनुभव करें और पश्चिमी घाटों में ट्रेकिंग करें'
      },
      {
        day: 4,
        title: 'Departure from Wayanad',
        titleHi: 'वायनाड से प्रस्थान',
        description: 'Check out from hotel and transfer to airport or next destination',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      },
    ],
    included: [
      'Hotel accommodation in Wayanad',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Local cuisine tasting',
      'Professional tour guide'
    ],
    includedHi: [
      'वायनाड में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'स्थानीय व्यंजन चखना',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },


  {
    id: 'himalayan-adventure',
    title: 'Himalayan Adventure Trek',
    titleHi: 'हिमालयन साहसिक ट्रेक',
    description: 'Challenge yourself with thrilling mountain treks, experience local Himalayan culture',
    descriptionHi: 'रोमांचक पर्वत ट्रेक के साथ खुद को चुनौती दें, स्थानीय हिमालयी संस्कृति का अनुभव करें',
    // price: 42000,
    duration: 10,
    category: 'adventure',
    image: '/public/trek.jpg',
    gallery: [
      '/public/trek1.jpg',
      '/public/trek2.jpg',
      '/public/trek3.jpg'
    ],
    highlights: [
      'Moderate to challenging treks',
      'Mountain village homestays',
      'Sunrise views from peaks',
      'Local cuisine experience',
      'Professional trekking guides'
    ],
    highlightsHi: [
      'मध्यम से चुनौतीपूर्ण ट्रेक',
      'पर्वत गांव होमस्टे',
      'चोटियों से सूर्योदय के दृश्य',
      'स्थानीय व्यंजन अनुभव',
      'पेशेवर ट्रेकिंग गाइड'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Base Camp Arrival',
        titleHi: 'बेस कैंप आगमन',
        description: 'Drive to base camp, acclimatization, gear check',
        descriptionHi: 'बेस कैंप की ड्राइव, अनुकूलन, गियर जाँच'
      },
      {
        day: 2,
        title: 'Trekking and Exploration',
        titleHi: 'ट्रेकिंग और अन्वेषण',
        description: 'Begin trek to higher altitudes, explore mountain trails',
        descriptionHi: 'ऊंचाई पर ट्रेक शुरू करें, पर्वत ट्रेल का अन्वेषण करें'
      },
      {
        day: 3,
        title: 'Summit and Return',
        titleHi: 'शिखर और वापसी',
        description: 'Reach summit, enjoy panoramic views, descend to base camp',
        descriptionHi: 'शिखर तक पहुंचें, व्यापक दृश्य का आनंद लें, बेस कैंप पर उतरें'
      },
      {
        day: 4,
        title: 'Departure from Base Camp',
        titleHi: 'बेस कैंप से प्रस्थान',
        description: 'Pack up, transfer to next destination or airport',
        descriptionHi: 'पैक करें, अगले गंतव्य या हवाई अड्डे के लिए स्थानांतरण करें'
      }
    ],
    included: [
      'Trekking permits',
      'All meals during trek',
      'Camping equipment',
      'Experienced guides and porters',
      'First aid and emergency support'
    ],
    includedHi: [
      'ट्रेकिंग परमिट',
      'ट्रेक के दौरान सभी भोजन',
      'कैंपिंग उपकरण',
      'अनुभवी गाइड और कुली',
      'प्राथमिक चिकित्सा और आपातकालीन सहायता'
    ],
    excluded: [
      'Personal trekking gear',
      'Travel insurance',
      'Tips for staff',
      'Extra snacks and beverages'
    ],
    excludedHi: [
      'व्यक्तिगत ट्रेकिंग गियर',
      'यात्रा बीमा',
      'स्टाफ के लिए टिप्स',
      'अतिरिक्त स्नैक्स और पेय पदार्थ'
    ]
  },
  {
    id: 'goa-beaches',
    title: 'Goa Beach Paradise',
    titleHi: 'गोवा बीच पैराडाइज',
    description: 'Sun, sand, and sea - experience the vibrant beach life of Goa with water sports and nightlife',
    descriptionHi: 'सूरज, रेत और समुद्र - जल खेल और रात्रि जीवन के साथ गोवा के जीवंत समुद्र तट जीवन का अनुभव करें',
    // price: 28000,
    duration: 5,
    category: 'beach',
    image: '/public/goa.jpg',
    gallery: [
      '/public/goa1.jpg',
      '/public/goa2.jpg',
      '/public/goa3.jpg'
    ],
    highlights: [
      'Beach hopping - Baga, Calangute, Anjuna',
      'Water sports - parasailing, jet ski',
      'Old Goa heritage tour',
      'Sunset cruise on Mandovi River',
      'Beach shacks and nightlife'
    ],
    highlightsHi: [
      'बीच होपिंग - बागा, कलंगुट, अंजुना',
      'जल खेल - पैरासेलिंग, जेट स्की',
      'पुरानी गोवा विरासत टूर',
      'मांडवी नदी पर सूर्यास्त क्रूज',
      'बीच झोपड़ियाँ और रात्रि जीवन'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Goa',
        titleHi: 'गोवा में आगमन',
        description: 'Airport transfer, beach resort check-in, evening beach walk',
        descriptionHi: 'हवाई अड्डा स्थानांतरण, बीच रिसॉर्ट चेक-इन, शाम की समुद्र तट सैर'
      },
      {
        day: 2,
        title: 'Goa Beach Activities',
        titleHi: 'गोवा बीच गतिविधियाँ',
        description: 'Enjoy water sports, beach hopping, and local seafood',
        descriptionHi: 'जल खेल, बीच होपिंग, और स्थानीय समुद्री भोजन का आनंद लें'
      },
      {
        day: 3,
        title: 'Old Goa and Culture',
        titleHi: 'पुरानी गोवा और संस्कृति',
        description: 'Visit Old Goa churches, spice plantations, and local markets',
        descriptionHi: 'पुरानी गोवा के चर्च, मसाला बागान, और स्थानीय बाजारों की यात्रा करें'
      },
      {
        day: 4,
        title: 'Sunset Cruise and Relaxation',
        titleHi: 'सूर्यास्त क्रूज और विश्राम',
        description: 'Enjoy a sunset cruise on Mandovi River and relax at the beach',
        descriptionHi: 'मांडवी नदी पर सूर्यास्त क्रूज का आनंद लें और समुद्र तट पर विश्राम करें'
      },
      {
        day: 5,
        title: 'Departure from Goa',
        titleHi: 'गोवा से प्रस्थान',
        description: 'Check out from beach resort and transfer to airport or next destination',
        descriptionHi: 'बीच रिसॉर्ट से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      }
    ],
    included: [
      'Beachfront resort stay',
      'Daily breakfast',
      'Water sports package',
      'River cruise',
      'Scooter rental for 2 days'
    ],
    includedHi: [
      'समुद्र तट रिसॉर्ट प्रवास',
      'दैनिक नाश्ता',
      'जल खेल पैकेज',
      'नदी क्रूज',
      '2 दिनों के लिए स्कूटर किराया'
    ],
    excluded: [
      'Airfare',
      'Lunch and dinner',
      'Club entry fees',
      'Additional water sports'
    ],
    excludedHi: [
      'हवाई किराया',
      'दोपहर का भोजन और रात का खाना',
      'क्लब प्रवेश शुल्क',
      'अतिरिक्त जल खेल'
    ]
  },

  {
    id: 'Coorg',
    title: 'Coorg Coffee & Nature',
    titleHi: 'कोर्ग कॉफी और प्रकृति',
    description: 'Explore the lush coffee plantations, waterfalls, and wildlife of Coorg, the Scotland of India',
    descriptionHi: 'कोर्ग के हरे-भरे कॉफी बागानों, झरनों, और वन्यजीवों का अन्वेषण करें, जो भारत का स्कॉटलैंड है',
    // price: 25000,
    duration: 5,
    category: 'nature',
    image: '/public/Coorg.jpg',
    gallery: [
      '/public/Coorg1.jpg',
      '/public/Coorg2.jpg',
      '/public/Coorg3.jpg'
    ],
    highlights: [
      'Visit coffee plantations',
      'Waterfalls and nature walks',
      'Wildlife spotting',
      'Local Coorg cuisine tasting',
      'Trekking in Western Ghats'
    ],
    highlightsHi: [
      'कोफी बागानों की यात्रा',
      'झरने और प्रकृति की सैर',
      'वन्यजीव देखना',
      'स्थानीय कोर्ग व्यंजन चखना',
      'पश्चिमी घाटों में ट्रेकिंग'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Coorg',
        titleHi: 'कोर्ग में आगमन',
        description: 'Transfer to hotel, evening nature walk',
        descriptionHi: 'होटल में स्थानांतरण, शाम की प्रकृति सैर'
      },
      {
        day: 2,
        title: 'Coorg Exploration',
        titleHi: 'कोर्ग अन्वेषण',
        description: 'Visit coffee plantations, waterfalls, and local markets',
        descriptionHi: 'कॉफी बागानों, झरनों, और स्थानीय बाजारों की यात्रा करें'
      },
      {
        day: 3,
        title: 'Coorg Local Culture',
        titleHi: 'कोर्ग स्थानीय संस्कृति',
        description: 'Experience local Coorg culture, cuisine, and markets',
        descriptionHi: 'स्थानीय कोर्ग संस्कृति, व्यंजन, और बाजारों का अनुभव करें'
      },
      {
        day: 4,
        title: 'Departure from Coorg',
        titleHi: 'कोर्ग से प्रस्थान',
        description: 'Check out from hotel and transfer to airport or next destination',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      }
    ],
    included: [
      'Hotel accommodation in Coorg',
      'Daily breakfast',
      'Guided tours and nature walks',
      'Trekking permits',
      'Local transportation within Coorg'
    ],
    includedHi: [
      'कोर्ग में होटल आवास',
      'दैनिक नाश्ता',
      'गाइडेड टूर और प्रकृति की सैर',
      'ट्रेकिंग परमिट',
      'कोर्ग के भीतर स्थानीय परिवहन'
    ],
    excluded: [
      'Transportation to Coorg',
      'Lunch and dinner',
      'Puja offerings',
      'Shopping'
    ],
    excludedHi: [
      'कोर्ग के लिए परिवहन',
      'दोपहर का भोजन और रात का खाना',
      'पूजा की पेशकश',
      'खरीदारी'
    ]
  },



  {
    id: 'varkala',
    title: 'Varkala Beach Retreat',
    titleHi: 'वर्कला बीच रिट्रीट',
    description: 'Relax on the pristine beaches of Varkala, enjoy Ayurvedic treatments and stunning cliff views',
    descriptionHi: 'वर्कला के प्राचीन समुद्र तटों पर आराम करें, आयुर्वेदिक उपचार और शानदार चट्टान के दृश्य का आनंद लें',
    // price: 30000,
    duration: 7,
    category: 'beach',
    image: '/public/varkala.jpg',
    gallery: [
      '/public/varkala1.jpg',
      '/public/varkala2.jpg',
      '/public/varkala3.jpg'
    ],
    highlights: [
      'Pristine beaches',
      'Ayurvedic spa treatments',
      'Cliff views and sunsets',
      'Local seafood cuisine',
      'Yoga and meditation sessions'
    ],
    highlightsHi: [
      'प्राचीन समुद्र तट',
      'आयुर्वेदिक स्पा उपचार',
      'चट्टान के दृश्य और सूर्यास्त',
      'स्थानीय समुद्री भोजन व्यंजन',
      'योग और ध्यान सत्र'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Varkala',
        titleHi: 'वर्कला में आगमन',
        description: 'Transfer to beach resort, evening beach walk',
        descriptionHi: 'बीच रिसॉर्ट में स्थानांतरण, शाम की समुद्र तट सैर'
      },
      {
        day: 2,
        title: 'Varkala Relaxation',
        titleHi: 'वर्कला विश्राम',
        description: 'Ayurvedic spa treatment and beach relaxation',
        descriptionHi: 'आयुर्वेदिक स्पा उपचार और समुद्र तट विश्राम'
      },
      {
        day: 3,
        title: 'Local Exploration',
        titleHi: 'स्थानीय अन्वेषण',
        description: 'Explore local markets, temples, and cultural sites',
        descriptionHi: 'स्थानीय बाजारों, मंदिरों, और सांस्कृतिक स्थलों का अन्वेषण करें'
      },
      {
        day: 4,
        title: 'Departure from Varkala',
        titleHi: 'वर्कला से प्रस्थान',
        description: 'Check out from beach resort and transfer to airport or next destination',
        descriptionHi: 'बीच रिसॉर्ट से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      }
    ],
    included: [
      'Beach resort accommodation',
      'Daily breakfast',
      'Ayurvedic spa treatments',
      'Local transportation within Varkala',
      'Yoga and meditation sessions'
    ],
    includedHi: [
      'बीच रिसॉर्ट आवास',
      'दैनिक नाश्ता',
      'आयुर्वेदिक स्पा उपचार',
      'वर्कला के भीतर स्थानीय परिवहन',
      'योग और ध्यान सत्र'
    ],
    excluded: [
      'Transportation to Varkala',
      'Lunch and dinner',
      'Personal expenses',
      'Adventure activities'
    ],
    excludedHi: [
      'वर्कला के लिए परिवहन',
      'दोपहर का भोजन और रात का खाना',
      'व्यक्तिगत खर्चे',
      'साहसिक गतिविधियाँ'
    ]
  },


  {
    id: 'pondicherry',
    title: 'Pondicherry Heritage Walk',
    titleHi: 'पांडिचेरी विरासत यात्रा',
    description: 'Explore the French colonial charm of Pondicherry with heritage walks, beaches, and vibrant culture',
    descriptionHi: 'फ्रेंच औपनिवेशिक आकर्षण का अन्वेषण करें पांडिचेरी के साथ विरासत यात्राएं, समुद्र तट, और जीवंत संस्कृति',
    // price: 28000,
    duration: 5,
    category: 'beach',
    image: '/public/pondicherry.jpg',
    gallery: [
      '/public/pondicherry1.jpg',
      '/public/pondicherry2.jpg',
      '/public/pondicherry3.jpg'
    ],
    highlights: [

      'Pondicherry beaches',
      'French colonial architecture',
      'Auroville visit',
      'Local markets and cuisine',
      'Heritage walks'
    ],
    highlightsHi: [
      'पांडिचेरी समुद्र तट',
      'फ्रेंच औपनिवेशिक वास्तुकला',
      'औरोविल यात्रा',
      'स्थानीय बाजार और व्यंजन',
      'विरासत यात्राएं'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Pondicherry',
        titleHi: 'पांडिचेरी में आगमन',
        description: 'Transfer to hotel, evening beach walk',
        descriptionHi: 'होटल में स्थानांतरण, शाम की समुद्र तट सैर'
      },

      {
        day: 2,
        title: 'Pondicherry Sightseeing',
        titleHi: 'पांडिचेरी दर्शनीय स्थल',
        description: 'Visit French Quarter, Auroville, and local markets',
        descriptionHi: 'फ्रेंच क्वार्टर, औरोविल, और स्थानीय बाजारों की यात्रा करें'
      },

      {
        day: 3,
        title: 'Cultural Exploration',
        titleHi: 'सांस्कृतिक अन्वेषण',
        description: 'Heritage walks, local cuisine tasting, and beach relaxation',
        descriptionHi: 'विरासत यात्राएं, स्थानीय व्यंजन चखना, और समुद्र तट विश्राम'
      },

      {
        day: 4,
        title: 'Departure from Pondicherry',
        titleHi: 'पांडिचेरी से प्रस्थान',
        description: 'Check out from hotel and transfer to airport or next destination',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      }

    ],
    included: [
      'Cultural tours and visits',
      'Daily breakfast',
      'Entrance fees to historic sites',
      'Local market visits',
      'Professional tour guide'
    ],
    includedHi: [
      'सांस्कृतिक पर्यटन और यात्राएं',
      'दैनिक नाश्ता',
      'ऐतिहासिक स्थलों के प्रवेश शुल्क',
      'स्थानीय बाजार यात्राएं',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Airfare',
      'Lunch and dinner',
      'Club entry fees',
      'Additional water sports'
    ],
    excludedHi: [
      'हवाई किराया',
      'दोपहर का भोजन और रात का खाना',
      'क्लब प्रवेश शुल्क',
      'अतिरिक्त जल खेल'
    ]
  },




  {
    id: 'gujarat',
    title: 'Gujarat Cultural Tour',
    titleHi: 'गुजरात सांस्कृतिक यात्रा',
    description: 'Explore the rich culture, heritage, and festivals of Gujarat with visits to historic sites and vibrant markets',
    descriptionHi: 'गुजरात की समृद्ध संस्कृति, विरासत और त्योहारों का अन्वेषण करें, ऐतिहासिक स्थलों और जीवंत बाजारों की यात्राओं के साथ',
    // price: 28000,
    duration: 5,
    category: 'cultural',
    image: '/public/gujarat.jpg',
    gallery: [
      '/public/gujarat1.jpg',
      '/public/gujarat2.jpg',
      '/public/gujarat3.jpg'
    ],
    highlights: [
      'Beach hopping - Baga, Calangute, Anjuna',
      'Water sports - parasailing, jet ski',
      'Old Goa heritage tour',
    ],
    highlightsHi: [
      'बीच होपिंग - बागा, कलंगुट, अंजुना',
      'जल खेल - पैरासेलिंग, जेट स्की',
      'पुरानी गोवा विरासत टूर',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Gujarat',
        titleHi: 'गुजरात में आगमन',
        description: 'Airport transfer, beach resort check-in, evening beach walk',
        descriptionHi: 'हवाई अड्डा स्थानांतरण, बीच रिसॉर्ट चेक-इन, शाम की समुद्र तट सैर'
      },
      {
        day: 2,
        title: 'Gujarat Sightseeing',
        titleHi: 'गुजरात दर्शनीय स्थल',
        description: 'Visit historic sites, cultural landmarks, and vibrant markets',
        descriptionHi: 'ऐतिहासिक स्थलों, सांस्कृतिक स्थलों, और जीवंत बाजारों की यात्रा करें'
      },
      {
        day: 3,
        title: 'Cultural Exploration',
        titleHi: 'सांस्कृतिक अन्वेषण',
        description: 'Heritage walks, local cuisine tasting, and market visits',
        descriptionHi: 'विरासत यात्राएं, स्थानीय व्यंजन चखना, और बाजार यात्राएं'
      },
      {
        day: 4,
        title: 'Departure from Gujarat',
        titleHi: 'गुजरात से प्रस्थान',
        description: 'Check out from hotel and transfer to airport or next destination',
        descriptionHi: 'होटल से चेक आउट करें और हवाई अड्डे या अगले गंतव्य के लिए स्थानांतरण करें'
      }
    ],
    included: [
      'Cultural tours and visits',
      'Daily breakfast',
      'Entrance fees to historic sites',
      'Local market visits',
      'Professional tour guide'
    ],
    includedHi: [
      'सांस्कृतिक पर्यटन और यात्राएं',
      'दैनिक नाश्ता',
      'ऐतिहासिक स्थलों के प्रवेश शुल्क',
      'स्थानीय बाजार यात्राएं',
      'पेशेवर टूर गाइड'
    ],
    excluded: [

      'Airfare',
      'Lunch and dinner',
      'Club entry fees',
      'Additional water sports'
    ],
    excludedHi: [
      'हवाई किराया',
      'दोपहर का भोजन और रात का खाना',
      'क्लब प्रवेश शुल्क',
      'अतिरिक्त जल खेल'
    ]
  }
  ,


  {
    id: 'Maharashtra-Temples',
    title: 'Maharashtra Temples Tour',
    titleHi: 'महाराष्ट्र मंदिर यात्रा',
    description: 'Explore the ancient and sacred temples of Maharashtra, experiencing rich culture and spirituality',
    descriptionHi: 'महाराष्ट्र के प्राचीन और पवित्र मंदिरों का अन्वेषण करें, समृद्ध संस्कृति और आध्यात्मिकता का अनुभव करें',
    // price: 30000,
    duration: 8,
    category: 'spiritual',
    image: '/public/maharashtra.jpg',
    gallery: [
      '/images/manali1.jpg',
      '/images/manali2.jpg',
      '/images/manali3.jpg'
    ],
    highlights: [
      'Visit to Trimbakeshwar Temple',
      'Exploration of Bhimashankar Temple',
      'Tour of Elephanta Caves',
      'Experience at Shirdi Sai Baba Temple',
      'Cultural immersion in Pune'
    ],
    highlightsHi: [
      'त्र्यंबकेश्वर मंदिर की यात्रा',
      'भीमाशंकर मंदिर का अन्वेषण',
      'एलेफंता गुफाओं की यात्रा',
      'शिरडी साई बाबा मंदिर में अनुभव',
      'पुणे में सांस्कृतिक डुबकी'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Nashik',
        titleHi: 'नासिक में आगमन',
        description: 'Arrive at Nashik, transfer to hotel, evening free for leisure',
        descriptionHi: 'नासिक में पहुंचें, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Maharashtra Temples Tour',
        titleHi: 'महाराष्ट्र मंदिर यात्रा',
        description: 'Visit Trimbakeshwar Temple, Bhimashankar Temple, and Elephanta Caves',
        descriptionHi: 'त्र्यंबकेश्वर मंदिर, भीमाशंकर मंदिर, और एलेफंता गुफाओं की यात्रा करें'
      },
      {
        day: 3,
        title: 'Shirdi Sai Baba Temple & Pune Cultural Tour',
        titleHi: 'शिरडी साई बाबा मंदिर और पुणे सांस्कृतिक यात्रा',
        description: 'Visit Shirdi Sai Baba Temple and experience cultural immersion in Pune',
        descriptionHi: 'शिरडी साई बाबा मंदिर की यात्रा करें और पुणे में सांस्कृतिक डुबकी लगाएं'
      }
    ],
    included: [
      'Hotel accommodation in Nashik and Pune',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Entrance fees to temples and caves',
      'Professional tour guide'
    ],
    includedHi: [
      'नासिक और पुणे में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'मंदिरों और गुफाओं के प्रवेश शुल्क',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },


  {
    id: 'Madhya-Pradesh-Temples',
    title: 'Madhya Pradesh Temples Tour',
    titleHi: 'मध्य प्रदेश मंदिर यात्रा',
    description: 'Explore the ancient and sacred temples of Madhya Pradesh, experiencing rich culture and spirituality',
    descriptionHi: 'मध्य प्रदेश के प्राचीन और पवित्र मंदिरों का अन्वेषण करें, समृद्ध संस्कृति और आध्यात्मिकता का अनुभव करें',
    // price: 30000,
    duration: 8,
    category: 'spiritual',
    image: '/public/madhya-pradesh.jpg',
    gallery: [
      '/images/manali1.jpg',
      '/images/manali2.jpg',
      '/images/manali3.jpg'
    ],
    highlights: [
      'Visit to Khajuraho Temples',
      'Exploration of Mahakaleshwar Temple',
      'Tour of Sanchi Stupa',
    ],
    highlightsHi: [
      'खजुराहो मंदिरों की यात्रा',
      'महाकालेश्वर मंदिर का अन्वेषण',
      'सांची स्तूप की यात्रा',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Khajuraho',
        titleHi: 'खजुराहो में आगमन',
        description: 'Arrive at Khajuraho, transfer to hotel, evening free for leisure',
        descriptionHi: 'खजुराहो में पहुंचें, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Madhya Pradesh Temples Tour',
        titleHi: 'मध्य प्रदेश मंदिर यात्रा',
        description: 'Visit Khajuraho Temples, Mahakaleshwar Temple, and Sanchi Stupa',
        descriptionHi: 'खजुराहो मंदिर, महाकालेश्वर मंदिर, और सांची स्तूप की यात्रा करें'
      },
      {
        day: 3,
        title: 'Madhya Pradesh Temples Tour',
        titleHi: 'मध्य प्रदेश मंदिर यात्रा',
        description: 'Visit Khajuraho Temples, Mahakaleshwar Temple, and Sanchi Stupa',
        descriptionHi: 'खजुराहो मंदिर, महाकालेश्वर मंदिर, और सांची स्तूप की यात्रा करें'
      }
    ],
    included: [
      'Hotel accommodation in Khajuraho',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Entrance fees to temples and stupas',
      'Professional tour guide'
    ],
    includedHi: [
      'खजुराहो में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'मंदिरों और स्तूपों के प्रवेश शुल्क',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },


  {
    id: 'Darjeeling',
    title: 'Darjeeling Tour',
    titleHi: 'दार्जिलिंग यात्रा',
    description: 'Explore the scenic beauty and cultural heritage of Darjeeling, experiencing its unique charm and tranquility',
    descriptionHi: 'दार्जिलिंग की सुरम्य सुंदरता और सांस्कृतिक विरासत का अन्वेषण करें, इसकी अनूठी आकर्षण और शांति का अनुभव करें',
    // price: 30000,
    duration: 8,
    category: 'spiritual',
    image: '/public/Darjeeling.jpg',
    gallery: [
      '/images/Darjeeling1.jpg',
      '/images/Darjeeling2.jpg',
      '/images/Darjeeling3.jpg'
    ],
    highlights: [
      'Visit to Tiger Hill for sunrise',
      'Exploration of Batasia Loop',
      'Tour of Darjeeling Tea Gardens',
      'Ride on the Darjeeling Himalayan Railway',
      'Cultural immersion in local monasteries'
    ],
    highlightsHi: [
      'टाइगर हिल में सूर्योदय की यात्रा',
      'बाटासिया लूप का अन्वेषण',
      'दार्जिलिंग चाय बागानों की यात्रा',
      'दार्जिलिंग हिमालयन रेलवे पर सवारी',
      'स्थानीय मठों में सांस्कृतिक डुबकी'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Darjeeling',
        titleHi: 'दार्जिलिंग में आगमन',
        description: 'Arrive at Darjeeling, transfer to hotel, evening free for leisure',
        descriptionHi: 'दार्जिलिंग में पहुंचें, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Darjeeling Tour',
        titleHi: 'दार्जिलिंग यात्रा',
        description: 'Visit Tiger Hill, Batasia Loop, and Darjeeling Tea Gardens',
        descriptionHi: 'टाइगर हिल, बाटासिया लूप, और दार्जिलिंग चाय बागानों की यात्रा करें'
      },
      {
        day: 3,
        title: 'Darjeeling Himalayan Railway & Monasteries',
        titleHi: 'दार्जिलिंग हिमालयन रेलवे और मठ',
        description: 'Ride on Darjeeling Himalayan Railway and visit local monasteries',
        descriptionHi: 'दार्जिलिंग हिमालयन रेलवे पर सवारी करें और स्थानीय मठों की यात्रा करें'
      }
    ],
    included: [
      'Hotel accommodation in Darjeeling',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Entrance fees to attractions',
      'Professional tour guide'
    ],
    includedHi: [
      'दार्जिलिंग में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'आकर्षणों के प्रवेश शुल्क',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },


  {
    id: 'Ooty',
    title: 'Ooty Tour',
    titleHi: 'ऊटी यात्रा',
    description: 'Explore the scenic beauty and cultural heritage of Ooty, experiencing its unique charm and tranquility',
    descriptionHi: 'ऊटी की सुरम्य सुंदरता और सांस्कृतिक विरासत का अन्वेषण करें, इसकी अनूठी आकर्षण और शांति का अनुभव करें',
    // price: 30000,
    duration: 8,
    category: 'mountain',
    image: '/public/Ooty.jpg',
    gallery: [
      '/images/Ooty1.jpg',
      '/images/Ooty2.jpg',
      '/images/Ooty3.jpg'
    ],
    highlights: [
      'ooty Hill for sunrise',
      'Exploration of Botanical Gardens',
      'Tour of Ooty Lake',
      'Ride on the Nilgiri Mountain Railway',
      'Cultural immersion in local markets'
    ],
    highlightsHi: [
      'ऊटी हिल में सूर्योदय की यात्रा',
      'बोटैनिकल गार्डन्स का अन्वेषण',
      'ऊटी झील की यात्रा',
      'निलगिरी माउंटेन रेलवे पर सवारी',
      'स्थानीय बाजारों में सांस्कृतिक डुबकी'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Ooty',
        titleHi: 'ऊटी में आगमन',
        description: 'Arrive at Ooty, transfer to hotel, evening free for leisure',
        descriptionHi: 'ऊटी में पहुंचें, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Ooty Tour',
        titleHi: 'ऊटी यात्रा',
        description: 'Visit Ooty Hill, Botanical Gardens, and Ooty Lake',
        descriptionHi: 'ऊटी हिल, बोटैनिकल गार्डन्स, और ऊटी झील की यात्रा करें'
      },
      {
        day: 3,
        title: 'Nilgiri Mountain Railway & Local Markets',
        titleHi: 'निलगिरी माउंटेन रेलवे और स्थानीय बाजार',
        description: 'Ride on Nilgiri Mountain Railway and visit local markets',
        descriptionHi: 'निलगिरी माउंटेन रेलवे पर सवारी करें और स्थानीय बाजारों की यात्रा करें'
      }
    ],
    included: [
      'Hotel accommodation in Ooty',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Entrance fees to attractions',
      'Professional tour guide'
    ],
    includedHi: [
      'ऊटी में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'आकर्षणों के प्रवेश शुल्क',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },


  {
    id: 'Kodaikanal',
    title: 'Kodaikanal Tour',
    titleHi: 'कोडाइकनाल यात्रा',
    description: 'kodaikanal is a beautiful hill station in Tamil Nadu, known for its scenic landscapes, pleasant climate, and serene environment. It is often referred to as the "Princess of Hill Stations" and is a popular destination for nature lovers and tourists seeking tranquility.',
    descriptionHi: 'कोडाइकनाल तमिलनाडु में एक सुंदर हिल स्टेशन है, जो अपने सुरम्य परिदृश्यों, सुखद जलवायु, और शांत वातावरण के लिए जाना जाता है। इसे अक्सर "हिल स्टेशनों की राजकुमारी" कहा जाता है और यह प्रकृति प्रेमियों और शांति की तलाश में पर्यटकों के लिए एक लोकप्रिय गंतव्य है।',
    // price: 30000,
    duration: 8,
    category: 'mountain',
    image: '/public/Kodaikanal.jpg',
    gallery: [
      '/images/Kodaikanal1.jpg',
      '/images/Kodaikanal2.jpg',
      '/images/Kodaikanal3.jpg'
    ],
    highlights: [
      'Kodaikanal Lake for boating',
      'Visit to Coaker\'s Walk',
      'Exploration of Bryant Park',
      'Tour of Pillar Rocks',
      'Visit to Silver Cascade Falls'
    ],
    highlightsHi: [
      'कोडाइकनाल झील में नौका विहार',
      'कोकर\'स वॉक की यात्रा',
      'ब्रायंट पार्क का अन्वेषण',
      'पिलर रॉक्स की यात्रा',
      'सिल्वर कास्केड फॉल्स की यात्रा'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kodaikanal',
        titleHi: 'कोडाइकनाल में आगमन',
        description: 'Arrive at Kodaikanal, transfer to hotel, evening free for leisure',
        descriptionHi: 'कोडाइकनाल में पहुंचें, होटल में स्थानांतरण, शाम को आराम के लिए मुक्त'
      },
      {
        day: 2,
        title: 'Kodaikanal Tour',
        titleHi: 'कोडाइकनाल यात्रा',
        description: 'Visit Coaker\'s Walk, Bryant Park, Pillar Rocks, and Silver Cascade Falls',
        descriptionHi: 'कोकर\'स वॉक, ब्रायंट पार्क, पिलर रॉक्स, और सिल्वर कास्केड फॉल्स की यात्रा करें'
      },
      {
        day: 3,
        title: 'Kodaikanal Lake & Local Markets',
        titleHi: 'कोडाइकनाल झील और स्थानीय बाजार',
        description: 'Visit Kodaikanal Lake and explore local markets',
        descriptionHi: 'कोडाइकनाल झील की यात्रा करें और स्थानीय बाजारों का अन्वेषण करें'
      }
    ],
    included: [
      'Hotel accommodation in Kodaikanal',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Entrance fees to attractions',
      'Professional tour guide'
    ],
    includedHi: [
      'कोडाइकनाल में होटल आवास',
      'दैनिक नाश्ता और रात का खाना',
      'सभी स्थानांतरण और दर्शनीय स्थल',
      'आकर्षणों के प्रवेश शुल्क',
      'पेशेवर टूर गाइड'
    ],
    excluded: [
      'Flight tickets',
      'Lunch and personal expenses',
      'Adventure sports charges',
      'Travel insurance'
    ],
    excludedHi: [
      'हवाई टिकट',
      'दोपहर का भोजन और व्यक्तिगत खर्च',
      'साहसिक खेल शुल्क',
      'यात्रा बीमा'
    ]
  },



];

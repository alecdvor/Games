// This file contains the complete question and answer data for the General Class Exam Pool.
const questionData = [
    // SUBELEMENT G1 – COMMISSION’S RULES
    {
        question: "On which HF and/or MF amateur bands are there portions where General class licensees cannot transmit?",
        answers: {
            A: "60 meters, 30 meters, 17 meters, and 12 meters",
            B: "160 meters, 60 meters, 15 meters, and 12 meters",
            C: "80 meters, 40 meters, 20 meters, and 15 meters",
            D: "80 meters, 20 meters, 15 meters, and 10 meters"
        },
        correct: "C"
    },
    {
        question: "On which of the following bands is phone operation prohibited?",
        answers: {
            A: "160 meters",
            B: "30 meters",
            C: "17 meters",
            D: "12 meters"
        },
        correct: "B"
    },
    {
        question: "On which of the following bands is image transmission prohibited?",
        answers: {
            A: "160 meters",
            B: "30 meters",
            C: "20 meters",
            D: "12 meters"
        },
        correct: "B"
    },
    {
        question: "Which of the following amateur bands is restricted to communication only on specific channels, rather than frequency ranges?",
        answers: {
            A: "11 meters",
            B: "12 meters",
            C: "30 meters",
            D: "60 meters"
        },
        correct: "D"
    },
    {
        question: "On which of the following frequencies are General class licensees prohibited from operating as control operator?",
        answers: {
            A: "7.125 MHz to 7.175 MHz",
            B: "28.000 MHz to 28.025 MHz",
            C: "21.275 MHz to 21.300 MHz",
            D: "All of the above"
        },
        correct: "A"
    },
    {
        question: "Which of the following applies when the FCC rules designate the amateur service as a secondary user on a band?",
        answers: {
            A: "Amateur stations must record the call sign of the primary service station before operating on a frequency assigned to that station",
            B: "Amateur stations may use the band only during emergencies",
            C: "Amateur stations must not cause harmful interference to primary users and must accept interference from primary users",
            D: "Amateur stations may only operate during specific hours of the day, while primary users are permitted 24-hour use of the band"
        },
        correct: "C"
    },
    {
        question: "On which amateur frequencies in the 10-meter band may stations with a General class control operator transmit CW emissions?",
        answers: {
            A: "28.000 MHz to 28.025 MHz only",
            B: "28.000 MHz to 28.300 MHz only",
            C: "28.025 MHz to 28.300 MHz only",
            D: "The entire band"
        },
        correct: "D"
    },
    {
        question: "Which HF bands have segments exclusively allocated to Amateur Extra licensees?",
        answers: {
            A: "All HF bands",
            B: "80 meters, 40 meters, 20 meters, and 15 meters",
            C: "All HF bands except 160 meters and 10 meters",
            D: "60 meters, 30 meters, 17 meters, and 12 meters"
        },
        correct: "B"
    },
    {
        question: "Which of the following frequencies is within the General class portion of the 15-meter band?",
        answers: {
            A: "14250 kHz",
            B: "18155 kHz",
            C: "21300 kHz",
            D: "24900 kHz"
        },
        correct: "C"
    },
    {
        question: "What portion of the 10-meter band is available for repeater use?",
        answers: {
            A: "The entire band",
            B: "The portion between 28.1 MHz and 28.2 MHz",
            C: "The portion between 28.3 MHz and 28.5 MHz",
            D: "The portion above 29.5 MHz"
        },
        correct: "D"
    },
    {
        question: "When General class licensees are not permitted to use the entire voice portion of a band, which portion of the voice segment is available to them?",
        answers: {
            A: "The lower frequency portion",
            B: "The upper frequency portion",
            C: "The lower frequency portion on frequencies below 7.3 MHz, and the upper portion on frequencies above 14.150 MHz",
            D: "The upper frequency portion on frequencies below 7.3 MHz, and the lower portion on frequencies above 14.150 MHz"
        },
        correct: "B"
    },
    {
        question: "What is the maximum height above ground for an antenna structure not near a public use airport without requiring notification to the FAA and registration with the FCC?",
        answers: {
            A: "50 feet",
            B: "100 feet",
            C: "200 feet",
            D: "250 feet"
        },
        correct: "C"
    },
    {
        question: "With which of the following conditions must beacon stations comply?",
        answers: {
            A: "No more than one beacon station may transmit in the same band from the same station location",
            B: "The frequency must be coordinated with the National Beacon Organization",
            C: "The frequency must be posted on the internet or published in a national periodical",
            D: "All these choices are correct"
        },
        correct: "A"
    },
    {
        question: "Which of the following is a purpose of a beacon station as identified in the FCC rules?",
        answers: {
            A: "Observation of propagation and reception",
            B: "Automatic identification of repeaters",
            C: "Transmission of bulletins of general interest to amateur radio licensees",
            D: "All these choices are correct"
        },
        correct: "A"
    },
    {
        question: "Which of the following transmissions is permitted for all amateur stations?",
        answers: {
            A: "Unidentified transmissions of less than 10 seconds duration for test purposes only",
            B: "Automatic retransmission of other amateur signals by any amateur station",
            C: "Occasional retransmission of weather and propagation forecast information from US government stations",
            D: "Encrypted messages, if not intended to facilitate a criminal act"
        },
        correct: "C"
    },
    {
        question: "Which of the following one-way transmissions are permitted?",
        answers: {
            A: "Unidentified test transmissions of less than 10 seconds in duration",
            B: "Transmissions to assist with learning the International Morse code",
            C: "Regular transmissions offering equipment for sale, if intended for amateur radio use",
            D: "All these choices are correct"
        },
        correct: "B"
    },
    {
        question: "Under what conditions are state and local governments permitted to regulate amateur radio antenna structures?",
        answers: {
            A: "Under no circumstances, FCC rules take priority",
            B: "At any time and to any extent necessary to accomplish a legitimate purpose of the state or local entity, provided that proper filings are made with the FCC",
            C: "Only when such structures exceed 50 feet in height and are clearly visible 1,000 feet from the structure",
            D: "Amateur Service communications must be reasonably accommodated, and regulations must constitute the minimum practical to accommodate a legitimate purpose of the state or local entity"
        },
        correct: "D"
    },
    {
        question: "What are the restrictions on the use of abbreviations or procedural signals in the amateur service?",
        answers: {
            A: "Only “Q” signals are permitted",
            B: "They may be used if they do not obscure the meaning of a message",
            C: "They are not permitted",
            D: "They are limited to those expressly listed in Part 97 of the FCC rules"
        },
        correct: "B"
    },
    {
        question: "When is it permissible to communicate with amateur stations in countries outside the areas administered by the Federal Communications Commission?",
        answers: {
            A: "Only when the foreign country has a formal third-party agreement filed with the FCC",
            B: "When the contact is with amateurs in any country except those whose administrations have notified the ITU that they object to such communications",
            C: "Only when the contact is with amateurs licensed by a country which is a member of the United Nations, or by a territory possessed by such a country",
            D: "Only when the contact is with amateurs licensed by a country which is a member of the International Amateur Radio Union, or by a territory possessed by such a country"
        },
        correct: "B"
    },
    {
        question: "On what HF frequencies are automatically controlled beacons permitted?",
        answers: {
            A: "On any frequency if power is less than 1 watt",
            B: "On any frequency if transmissions are in Morse code",
            C: "21.08 MHz to 21.09 MHz",
            D: "28.20 MHz to 28.30 MHz"
        },
        correct: "D"
    },
    {
        question: "What is the power limit for beacon stations?",
        answers: {
            A: "10 watts PEP output",
            B: "20 watts PEP output",
            C: "100 watts PEP output",
            D: "200 watts PEP output"
        },
        correct: "C"
    },
    {
        question: "Who or what determines “good engineering and good amateur practice,” as applied to the operation of an amateur station in all respects not covered by the Part 97 rules?",
        answers: {
            A: "The FCC",
            B: "The control operator",
            C: "The IEEE",
            D: "The ITU"
        },
        correct: "A"
    },
    {
        question: "What is the maximum transmitter power an amateur station may use on 10.140 MHz?",
        answers: {
            A: "200 watts PEP output",
            B: "1000 watts PEP output",
            C: "1500 watts PEP output",
            D: "2000 watts PEP output"
        },
        correct: "A"
    },
    {
        question: "What is the maximum transmitter power an amateur station may use on the 12-meter band?",
        answers: {
            A: "50 watts PEP output",
            B: "200 watts PEP output",
            C: "1500 watts PEP output",
            D: "An effective radiated power equivalent to 100 watts from a half-wave dipole"
        },
        correct: "C"
    },
    {
        question: "What is the maximum bandwidth permitted by FCC rules for amateur radio stations transmitting on USB frequencies in the 60-meter band?",
        answers: {
            A: "2.8 kHz",
            B: "5.6 kHz",
            C: "1.8 kHz",
            D: "3 kHz"
        },
        correct: "A"
    },
    {
        question: "Which of the following is required by the FCC rules when operating in the 60-meter band?",
        answers: {
            A: "If you are using an antenna other than a dipole, you must keep a record of the gain of your antenna",
            B: "You must keep a record of the date, time, frequency, power level, and stations worked",
            C: "You must keep a record of all third-party traffic",
            D: "You must keep a record of the manufacturer of your equipment and the antenna used"
        },
        correct: "A"
    },
    {
        question: "What is the limit for transmitter power on the 28 MHz band for a General Class control operator?",
        answers: {
            A: "100 watts PEP output",
            B: "1000 watts PEP output",
            C: "1500 watts PEP output",
            D: "2000 watts PEP output"
        },
        correct: "C"
    },
    {
        question: "What is the limit for transmitter power on the 1.8 MHz band?",
        answers: {
            A: "200 watts PEP output",
            B: "1000 watts PEP output",
            C: "1200 watts PEP output",
            D: "1500 watts PEP output"
        },
        correct: "D"
    },
    {
        question: "What must be done before using a new digital protocol on the air?",
        answers: {
            A: "Type-certify equipment to FCC standards",
            B: "Obtain an experimental license from the FCC",
            C: "Publicly document the technical characteristics of the protocol",
            D: "Submit a rule-making proposal to the FCC describing the codes and methods of the technique"
        },
        correct: "C"
    },
    {
        question: "What is the maximum symbol rate permitted for RTTY or data emission transmitted at frequencies below 28 MHz?",
        answers: {
            A: "56 kilobaud",
            B: "19.6 kilobaud",
            C: "1200 baud",
            D: "300 baud"
        },
        correct: "D"
    },
    {
        question: "What is the maximum power limit on the 60-meter band?",
        answers: {
            A: "1500 watts PEP",
            B: "10 watts RMS",
            C: "ERP of 100 watts PEP with respect to a dipole",
            D: "ERP of 100 watts PEP with respect to an isotropic antenna"
        },
        correct: "C"
    },
    {
        question: "What is the maximum symbol rate permitted for RTTY or data emission transmissions on the 10-meter band?",
        answers: {
            A: "56 kilobaud",
            B: "19.6 kilobaud",
            C: "1200 baud",
            D: "300 baud"
        },
        correct: "C"
    },
    {
        question: "What measurement is specified by FCC rules that regulate maximum power?",
        answers: {
            A: "RMS output from the transmitter",
            B: "RMS input to the antenna",
            C: "PEP input to the antenna",
            D: "PEP output from the transmitter"
        },
        correct: "D"
    },
    {
        question: "Who may receive partial credit for the elements represented by an expired amateur radio license?",
        answers: {
            A: "Any person who can demonstrate that they once held an FCC-issued General, Advanced, or Amateur Extra class license that was not revoked by the FCC",
            B: "Anyone who held an FCC-issued amateur radio license that expired not less than 5 and not more than 15 years ago",
            C: "Any person who previously held an amateur license issued by another country, but only if that country has a current reciprocal licensing agreement with the FCC",
            D: "Only persons who once held an FCC issued Novice, Technician, or Technician Plus license"
        },
        correct: "A"
    },
    {
        question: "What license examinations may you administer as an accredited Volunteer Examiner holding a General class operator license?",
        answers: {
            A: "General and Technician",
            B: "None, only Amateur Extra class licensees may be accredited",
            C: "Technician only",
            D: "Amateur Extra, General, and Technician"
        },
        correct: "C"
    },
    {
        question: "On which of the following band segments may you operate if you are a Technician class operator and have an unexpired Certificate of Successful Completion of Examination (CSCE) for General class privileges?",
        answers: {
            A: "Only the Technician band segments until your upgrade is posted in the FCC database",
            B: "Only on the Technician band segments until you have a receipt for the FCC application fee payment",
            C: "On any General or Technician class band segment",
            D: "On any General or Technician class band segment except 30 meters and 60 meters"
        },
        correct: "C"
    },
    {
        question: "Who must observe the administration of a Technician class license examination?",
        answers: {
            A: "At least three Volunteer Examiners of General class or higher",
            B: "At least two Volunteer Examiners of General class or higher",
            C: "At least two Volunteer Examiners of Technician class or higher",
            D: "At least three Volunteer Examiners of Technician class"
        },
        correct: "A"
    },
    {
        question: "When operating a US station by remote control from outside the country, what license is required of the control operator?",
        answers: {
            A: "A US operator/primary station license",
            B: "Only an appropriate US operator/primary license and a special remote station permit from the FCC",
            C: "Only a license from the foreign country, as long as the call sign includes identification of portable operation in the US",
            D: "A license from the foreign country and a special remote station permit from the FCC"
        },
        correct: "A"
    },
    {
        question: "Until an upgrade to General class is shown in the FCC database, when must a Technician licensee identify with “AG” after their call sign?",
        answers: {
            A: "Whenever they operate using General class frequency privileges",
            B: "Whenever they operate on any amateur frequency",
            C: "Whenever they operate using Technician frequency privileges",
            D: "A special identifier is not required if their General class license application has been filed with the FCC"
        },
        correct: "A"
    },
    {
        question: "Volunteer Examiners are accredited by what organization?",
        answers: {
            A: "The Federal Communications Commission",
            B: "The Universal Licensing System",
            C: "A Volunteer Examiner Coordinator",
            D: "The Wireless Telecommunications Bureau"
        },
        correct: "C"
    },
    {
        question: "Which of the following criteria must be met for a non-US citizen to be an accredited Volunteer Examiner?",
        answers: {
            A: "The person must be a resident of the US for a minimum of 5 years",
            B: "The person must hold an FCC granted amateur radio license of General class or above",
            C: "The person’s home citizenship must be in ITU region 2",
            D: "None of these choices is correct; a non-US citizen cannot be a Volunteer Examiner"
        },
        correct: "B"
    },
    {
        question: "How long is a Certificate of Successful Completion of Examination (CSCE) valid for exam element credit?",
        answers: {
            A: "30 days",
            B: "180 days",
            C: "365 days",
            D: "For as long as your current license is valid"
        },
        correct: "C"
    },
    {
        question: "What is the minimum age that one must be to qualify as an accredited Volunteer Examiner?",
        answers: {
            A: "16 years",
            B: "18 years",
            C: "21 years",
            D: "There is no age limit"
        },
        correct: "B"
    },
    {
        question: "What action is required to obtain a new General class license after a previously held license has expired and the two-year grace period has passed?",
        answers: {
            A: "They must have a letter from the FCC showing they once held an amateur or commercial license",
            B: "There are no requirements other than being able to show a copy of the expired license",
            C: "Contact the FCC to have the license reinstated",
            D: "The applicant must show proof of the appropriate expired license grant and pass the current Element 2 exam"
        },
        correct: "D"
    },
    {
        question: "When operating a station in South America by remote control over the internet from the US, what regulations apply?",
        answers: {
            A: "Those of both the remote station’s country and the FCC",
            B: "Those of the remote station’s country and the FCC’s third-party regulations",
            C: "Only those of the remote station’s country",
            D: "Only those of the FCC"
        },
        correct: "C"
    },
    {
        question: "Which of the following would disqualify a third party from participating in sending a message via an amateur station?",
        answers: {
            A: "The third party’s amateur license has been revoked and not reinstated",
            B: "The third party is not a US citizen",
            C: "The third party is speaking in a language other than English",
            D: "All these choices are correct"
        },
        correct: "A"
    },
    {
        question: "When may a 10-meter repeater retransmit the 2-meter signal from a station that has a Technician class control operator?",
        answers: {
            A: "Under no circumstances",
            B: "Only if the station on 10-meters is operating under a Special Temporary Authorization allowing such retransmission",
            C: "Only during an FCC-declared general state of communications emergency",
            D: "Only if the 10-meter repeater control operator holds at least a General class license"
        },
        correct: "D"
    },
    {
        question: "What is required to conduct communications with a digital station operating under automatic control outside the automatic control band segments?",
        answers: {
            A: "The station initiating the contact must be under local or remote control",
            B: "The interrogating transmission must be made by another automatically controlled station",
            C: "No third-party traffic may be transmitted",
            D: "The control operator of the interrogating station must hold an Amateur Extra class license"
        },
        correct: "A"
    },
    {
        question: "Which of the following conditions require a licensed amateur radio operator to take specific steps to avoid harmful interference to other users or facilities?",
        answers: {
            A: "When operating within one mile of an FCC Monitoring Station",
            B: "When using a band where the Amateur Service is secondary",
            C: "When a station is transmitting spread spectrum emissions",
            D: "All these choices are correct"
        },
        correct: "D"
    },
    {
        question: "What are the restrictions on messages sent to a third party in a country with which there is a Third-Party Agreement?",
        answers: {
            A: "They must relate to emergencies or disaster relief",
            B: "They must be for other licensed amateurs",
            C: "They must relate to amateur radio, or remarks of a personal character, or messages relating to emergencies or disaster relief",
            D: "The message must be limited to no longer than 1 minute in duration and the name of the third party must be recorded in the station log"
        },
        correct: "C"
    },
    {
        question: "The frequency allocations of which ITU region apply to radio amateurs operating in North and South America?",
        answers: {
            A: "Region 4",
            B: "Region 3",
            C: "Region 2",
            D: "Region 1"
        },
        correct: "C"
    },
    {
        question: "In what part of the 2.4 GHz band may an amateur station communicate with non-licensed Wi-Fi stations?",
        answers: {
            A: "Anywhere in the band",
            B: "Channels 1 through 4",
            C: "Channels 42 through 45",
            D: "No part"
        },
        correct: "D"
    },
    {
        question: "What is the maximum PEP output allowed for spread spectrum transmissions?",
        answers: {
            A: "100 milliwatts",
            B: "10 watts",
            C: "100 watts",
            D: "1500 watts"
        },
        correct: "B"
    },
    {
        question: "Under what circumstances are messages that are sent via digital modes exempt from Part 97 third-party rules that apply to other modes of communication?",
        answers: {
            A: "Under no circumstances",
            B: "When messages are encrypted",
            C: "When messages are not encrypted",
            D: "When under automatic control"
        },
        correct: "A"
    },
    {
        question: "Why should an amateur operator normally avoid transmitting on 14.100, 18.110, 21.150, 24.930 and 28.200 MHz?",
        answers: {
            A: "A system of propagation beacon stations operates on those frequencies",
            B: "A system of automatic digital stations operates on those frequencies",
            C: "These frequencies are set aside for emergency operations",
            D: "These frequencies are set aside for bulletins from the FCC"
        },
        correct: "A"
    },
    {
        question: "On what bands may automatically controlled stations transmitting RTTY or data emissions communicate with other automatically controlled digital stations?",
        answers: {
            A: "On any band segment where digital operation is permitted",
            B: "Anywhere in the non-phone segments of the 10-meter or shorter wavelength bands",
            C: "Only in the non-phone Extra Class segments of the bands",
            D: "Anywhere in the 6-meter or shorter wavelength bands, and in limited segments of some of the HF bands"
        },
        correct: "D"
    },
    {
        question: "When may third-party messages be transmitted via remote control?",
        answers: {
            A: "Under any circumstances in which third party messages are permitted by FCC rules",
            B: "Under no circumstances except for emergencies",
            C: "Only when the message is intended for licensed radio amateurs",
            D: "Only when the message is intended for third parties in areas where licensing is controlled by the FCC"
        },
        correct: "A"
    },
    // SUBELEMENT G2 – OPERATING PROCEDURES
    {
        question: "Which mode is most commonly used for voice communications on frequencies of 14 MHz or higher?",
        answers: {
            A: "Upper sideband",
            B: "Lower sideband",
            C: "Suppressed sideband",
            D: "Double sideband"
        },
        correct: "A"
    },
    {
        question: "Which mode is most commonly used for voice communications on the 160-, 75-, and 40-meter bands?",
        answers: {
            A: "Upper sideband",
            B: "Lower sideband",
            C: "Suppressed sideband",
            D: "Double sideband"
        },
        correct: "B"
    },
    {
        question: "Which mode is most commonly used for SSB voice communications in the VHF and UHF bands?",
        answers: {
            A: "Upper sideband",
            B: "Lower sideband",
            C: "Suppressed sideband",
            D: "Double sideband"
        },
        correct: "A"
    },
    {
        question: "Which mode is most commonly used for voice communications on the 17- and 12-meter bands?",
        answers: {
            A: "Upper sideband",
            B: "Lower sideband",
            C: "Suppressed sideband",
            D: "Double sideband"
        },
        correct: "A"
    },
    {
        question: "Which mode of voice communication is most commonly used on the HF amateur bands?",
        answers: {
            A: "Frequency modulation",
            B: "Double sideband",
            C: "Single sideband",
            D: "Single phase modulation"
        },
        correct: "C"
    },
    {
        question: "Which of the following is an advantage of using single sideband, as compared to other analog voice modes on the HF amateur bands?",
        answers: {
            A: "Very high-fidelity voice modulation",
            B: "Less subject to interference from atmospheric static crashes",
            C: "Ease of tuning on receive and immunity to impulse noise",
            D: "Less bandwidth used and greater power efficiency"
        },
        correct: "D"
    },
    {
        question: "Which of the following statements is true of single sideband (SSB)?",
        answers: {
            A: "Only one sideband and the carrier are transmitted; the other sideband is suppressed",
            B: "Only one sideband is transmitted; the other sideband and carrier are suppressed",
            C: "SSB is the only voice mode authorized on the 20-, 15-, and 10-meter amateur bands",
            D: "SSB is the only voice mode authorized on the 160-, 75-, and 40-meter amateur bands"
        },
        correct: "B"
    },
    {
        question: "What is the recommended way to break into a phone contact?",
        answers: {
            A: "Say “QRZ” several times, followed by your call sign",
            B: "Say your call sign once",
            C: "Say “Breaker Breaker”",
            D: "Say “CQ” followed by the call sign of either station"
        },
        correct: "B"
    },
    {
        question: "Why do most amateur stations use lower sideband on the 160-, 75-, and 40-meter bands?",
        answers: {
            A: "Lower sideband is more efficient than upper sideband at these frequencies",
            B: "Lower sideband is the only sideband legal on these frequency bands",
            C: "Because it is fully compatible with an AM detector",
            D: "It is commonly accepted amateur practice"
        },
        correct: "D"
    },
    {
        question: "Which of the following statements is true of VOX operation versus PTT operation?",
        answers: {
            A: "The received signal is more natural sounding",
            B: "It allows “hands free” operation",
            C: "It occupies less bandwidth",
            D: "It provides more power output"
        },
        correct: "B"
    },
    {
        question: "Generally, who should respond to a station in the contiguous 48 states calling “CQ DX”?",
        answers: {
            A: "Any caller is welcome to respond",
            B: "Only stations in Germany",
            C: "Any stations outside the lower 48 states",
            D: "Only contest stations"
        },
        correct: "C"
    },
    {
        question: "What control is typically adjusted for proper ALC setting on a single sideband transceiver?",
        answers: {
            A: "RF clipping level",
            B: "Transmit audio or microphone gain",
            C: "Antenna inductance or capacitance",
            D: "Attenuator level"
        },
        correct: "B"
    },
    {
        question: "Which of the following is true concerning access to frequencies?",
        answers: {
            A: "Nets have priority",
            B: "QSOs in progress have priority",
            C: "Except during emergencies, no amateur station has priority access to any frequency",
            D: "Contest operations should yield to non-contest use of frequencies"
        },
        correct: "C"
    },
    {
        question: "What is the first thing you should do if you are communicating with another amateur station and hear a station in distress break in?",
        answers: {
            A: "Inform your local emergency coordinator",
            B: "Acknowledge the station in distress and determine what assistance may be needed",
            C: "Immediately decrease power to avoid interfering with the station in distress",
            D: "Immediately cease all transmissions"
        },
        correct: "B"
    },
    {
        question: "What is good amateur practice if propagation changes during a contact creating interference from other stations using the frequency?",
        answers: {
            A: "Advise the interfering stations that you are on the frequency and that you have priority",
            B: "Decrease power and continue to transmit",
            C: "Attempt to resolve the interference problem with the other stations in a mutually acceptable manner",
            D: "Switch to the opposite sideband"
        },
        correct: "C"
    },
    {
        question: "When selecting a CW transmitting frequency, what minimum separation from other stations should be used to minimize interference to stations on adjacent frequencies?",
        answers: {
            A: "5 Hz to 50 Hz",
            B: "150 Hz to 500 Hz",
            C: "1 kHz to 3 kHz",
            D: "3 kHz to 6 kHz"
        },
        correct: "B"
    },
    {
        question: "When selecting an SSB transmitting frequency, what minimum separation should be used to minimize interference to stations on adjacent frequencies?",
        answers: {
            A: "5 Hz to 50 Hz",
            B: "150 Hz to 500 Hz",
            C: "2 kHz to 3 kHz",
            D: "Approximately 6 kHz"
        },
        correct: "C"
    },
    {
        question: "How can you avoid harmful interference on an apparently clear frequency before calling CQ on CW or phone?",
        answers: {
            A: "Send “QRL?” on CW, followed by your call sign; or, if using phone, ask if the frequency is in use, followed by your call sign",
            B: "Listen for 2 minutes before calling CQ",
            C: "Send the letter “V” in Morse code several times and listen for a response, or say “test” several times and listen for a response",
            D: "Send “QSY” on CW or if using phone, announce “the frequency is in use,” then give your call sign and listen for a response"
        },
        correct: "A"
    },
    {
        question: "Which of the following complies with commonly accepted amateur practice when choosing a frequency on which to initiate a call?",
        answers: {
            A: "Listen on the frequency for at least two minutes to be sure it is clear",
            B: "Identify your station by transmitting your call sign at least 3 times",
            C: "Follow the voluntary band plan",
            D: "All these choices are correct"
        },
        correct: "C"
    },
    {
        question: "What is the voluntary band plan restriction for US stations transmitting within the 48 contiguous states in the 50.1 MHz to 50.125 MHz band segment?",
        answers: {
            A: "Only contacts with stations not within the 48 contiguous states",
            B: "Only contacts with other stations within the 48 contiguous states",
            C: "Only digital contacts",
            D: "Only SSTV contacts"
        },
        correct: "A"
    },
    {
        question: "Who may be the control operator of an amateur station transmitting in RACES to assist relief operations during a disaster?",
        answers: {
            A: "Only a person holding an FCC-issued amateur operator license",
            B: "Only a RACES net control operator",
            C: "A person holding an FCC-issued amateur operator license or an appropriate government official",
            D: "Any control operator when normal communication systems are operational"
        },
        correct: "A"
    },
    {
        question: "Which of the following is good amateur practice for net management?",
        answers: {
            A: "Always use multiple sets of phonetics during check-in",
            B: "Have a backup frequency in case of interference or poor conditions",
            C: "Transmit the full net roster at the beginning of every session",
            D: "All these choices are correct"
        },
        correct: "B"
    },
    {
        question: "How often may RACES training drills and tests be routinely conducted without special authorization?",
        answers: {
            A: "No more than 1 hour per month",
            B: "No more than 2 hours per month",
            C: "No more than 1 hour per week",
            D: "No more than 2 hours per week"
        },
        correct: "C"
    },
    {
        question: "Which of the following describes full break-in CW operation (QSK)?",
        answers: {
            A: "Breaking stations send the Morse code prosign “BK”",
            B: "Automatic keyers, instead of hand keys, are used to send Morse code",
            C: "An operator must activate a manual send/receive switch before and after every transmission",
            D: "Transmitting stations can receive between code characters and elements"
        },
        correct: "D"
    },
    {
        question: "What should you do if a CW station sends “QRS?”",
        answers: {
            A: "Send slower",
            B: "Change frequency",
            C: "Increase your power",
            D: "Repeat everything twice"
        },
        correct: "A"
    },
    {
        question: "What does it mean when a CW operator sends “KN” at the end of a transmission?",
        answers: {
            A: "No US stations should call",
            B: "Operating full break-in",
            C: "Listening only for a specific station or stations",
            D: "Closing station now"
        },
        correct: "C"
    },
    {
        question: "What does the Q signal “QRL?” mean?",
        answers: {
            A: "“Will you keep the frequency clear?”",
            B: "“Are you operating full break-in?” or “Can you operate full break-in?”",
            C: "“Are you listening only for a specific station?”",
            D: "“Are you busy?” or “Is this frequency in use?”"
        },
        correct: "D"
    },
    {
        question: "What is the best speed to use when answering a CQ in Morse code?",
        answers: {
            A: "The fastest speed at which you are comfortable copying, but no slower than the CQ",
            B: "The fastest speed at which you are comfortable copying, but no faster than the CQ",
            C: "At the standard calling speed of 10 wpm",
            D: "At the standard calling speed of 5 wpm"
        },
        correct: "B"
    },
    {
        question: "What does the term “zero beat” mean in CW operation?",
        answers: {
            A: "Matching the speed of the transmitting station",
            B: "Operating split to avoid interference on frequency",
            C: "Sending without error",
            D: "Matching the transmit frequency to the frequency of a received signal"
        },
        correct: "D"
    },
    {
        question: "When sending CW, what does a “C” mean when added to the RST report?",
        answers: {
            A: "Chirpy or unstable signal",
            B: "Report was read from an S meter rather than estimated",
            C: "100 percent copy",
            D: "Key clicks"
        },
        correct: "A"
    },
    {
        question: "What prosign is sent to indicate the end of a formal message when using CW?",
        answers: {
            A: "SK",
            B: "BK",
            C: "AR",
            D: "KN"
        },
        correct: "C"
    },
    {
        question: "What does the Q signal “QSL” mean?",
        answers: {
            A: "Send slower",
            B: "We have already confirmed the contact",
            C: "I have received and understood",
            D: "We have worked before"
        },
        correct: "C"
    },
    {
        question: "What does the Q signal “QRN” mean?",
        answers: {
            A: "Send more slowly",
            B: "Stop sending",
            C: "Zero beat my signal",
            D: "I am troubled by static"
        },
        correct: "D"
    },
    {
        question: "What does the Q signal “QRV” mean?",
        answers: {
            A: "You are sending too fast",
            B: "There is interference on the frequency",
            C: "I am quitting for the day",
            D: "I am ready to receive"
        },
        correct: "D"
    },
    {
        question: "What is the Volunteer Monitor Program?",
        answers: {
            A: "Amateur volunteers who are formally enlisted to monitor the airwaves for rules violations",
            B: "Amateur volunteers who conduct amateur licensing examinations",
            C: "Amateur volunteers who conduct frequency coordination for amateur VHF repeaters",
            D: "Amateur volunteers who use their station equipment to help civil defense organizations in times of emergency"
        },
        correct: "A"
    },
    {
        question: "Which of the following are objectives of the Volunteer Monitor Program?",
        answers: {
            A: "To conduct efficient and orderly amateur licensing examinations",
            B: "To provide emergency and public safety communications",
            C: "To coordinate repeaters for efficient and orderly spectrum usage",
            D: "To encourage amateur radio operators to self-regulate and comply with the rules"
        },
        correct: "D"
    },
    {
        question: "What procedure may be used by Volunteer Monitors to localize a station whose continuous carrier is holding a repeater on in their area?",
        answers: {
            A: "Compare vertical and horizontal signal strengths on the input frequency",
            B: "Compare beam headings on the repeater input from their home locations with that of other Volunteer Monitors",
            C: "Compare signal strengths between the input and output of the repeater",
            D: "All these choices are correct"
        },
        correct: "B"
    },
    {
        question: "Which of the following describes an azimuthal projection map?",
        answers: {
            A: "A map that shows accurate land masses",
            B: "A map that shows true bearings and distances from a specific location",
            C: "A map that shows the angle at which an amateur satellite crosses the equator",
            D: "A map that shows the number of degrees longitude that an amateur satellite appears to move westward at the equator with each orbit"
        },
        correct: "B"
    },
    {
        question: "Which of the following indicates that you are looking for an HF contact with any station?",
        answers: {
            A: "Sign your call sign once, followed by the words “listening for a call” -- if no answer, change frequency and repeat",
            B: "Say “QTC” followed by “this is” and your call sign -- if no answer, change frequency and repeat",
            C: "Repeat “CQ” a few times, followed by “this is,” then your call sign a few times, then pause to listen, repeat as necessary",
            D: "Transmit an unmodulated carried for approximately 10 seconds, followed by “this is” and your call sign, and pause to listen -- repeat as necessary"
        },
        correct: "C"
    },
    {
        question: "How is a directional antenna pointed when making a “long-path” contact with another station?",
        answers: {
            A: "Toward the rising sun",
            B: "Along the gray line",
            C: "180 degrees from the station’s short-path heading",
            D: "Toward the north"
        },
        correct: "C"
    },
    {
        question: "Which of the following are examples of the NATO Phonetic Alphabet?",
        answers: {
            A: "Able, Baker, Charlie, Dog",
            B: "Adam, Boy, Charles, David",
            C: "America, Boston, Canada, Denmark",
            D: "Alpha, Bravo, Charlie, Delta"
        },
        correct: "D"
    },
    {
        question: "Why do many amateurs keep a station log?",
        answers: {
            A: "The FCC requires a log of all international contacts",
            B: "The FCC requires a log of all international third-party traffic",
            C: "The log provides evidence of operation needed to renew a license without retest",
            D: "To help with a reply if the FCC requests information about your station"
        },
        correct: "D"
    },
    {
        question: "Which of the following is required when participating in a contest on HF frequencies?",
        answers: {
            A: "Submit a log to the contest sponsor",
            B: "Send a QSL card to the stations worked, or QSL via Logbook of The World",
            C: "Identify your station according to normal FCC regulations",
            D: "All these choices are correct"
        },
        correct: "C"
    },
    {
        question: "What is QRP operation?",
        answers: {
            A: "Remote piloted model control",
            B: "Low-power transmit operation",
            C: "Transmission using Quick Response Protocol",
            D: "Traffic relay procedure net operation"
        },
        correct: "B"
    },
    {
        question: "Why are signal reports typically exchanged at the beginning of an HF contact?",
        answers: {
            A: "To allow each station to operate according to conditions",
            B: "To be sure the contact will count for award programs",
            C: "To follow standard radiogram structure",
            D: "To allow each station to calibrate their frequency display"
        },
        correct: "A"
    },
    {
        question: "Which mode is normally used when sending RTTY signals via AFSK with an SSB transmitter?",
        answers: {
            A: "USB",
            B: "DSB",
            C: "CW",
            D: "LSB"
        },
        correct: "D"
    },
    {
        question: "What is VARA?",
        answers: {
            A: "A low signal-to-noise digital mode used for EME (moonbounce)",
            B: "A digital protocol used with Winlink",
            C: "A radio direction finding system used on VHF and UHF",
            D: "A DX spotting system using a network of software defined radios"
        },
        correct: "B"
    },
    {
        question: "What symptoms may result from other signals interfering with a PACTOR or VARA transmission?",
        answers: {
            A: "Frequent retries or timeouts",
            B: "Long pauses in message transmission",
            C: "Failure to establish a connection between stations",
            D: "All these choices are correct"
        },
        correct: "D"
    },
    {
        question: "Which of the following is good practice when choosing a transmitting frequency to answer a station calling CQ using FT8?",
        answers: {
            A: "Always call on the station’s frequency",
            B: "Call on any frequency in the waterfall except the station’s frequency",
            C: "Find a clear frequency during the same time slot as the calling station",
            D: "Find a clear frequency during the alternate time slot to the calling station"
        },
        correct: "D"
    },
    {
        question: "What is the standard sideband for JT65, JT9, FT4, or FT8 digital signal when using AFSK?",
        answers: {
            A: "LSB",
            B: "USB",
            C: "DSB",
            D: "SSB"
        },
        correct: "B"
    },
    {
        question: "What is the most common frequency shift for RTTY emissions in the amateur HF bands?",
        answers: {
            A: "85 Hz",
            B: "170 Hz",
            C: "425 Hz",
            D: "850 Hz"
        },
        correct: "B"
    },
    {
        question: "Which of the following is required when using FT8?",
        answers: {
            A: "A special hardware modem",
            B: "Computer time accurate to within approximately 1 second",
            C: "Receiver attenuator set to -12 dB",
            D: "A vertically polarized antenna"
        },
        correct: "B"
    },
    {
        question: "In what segment of the 20-meter band are most digital mode operations commonly found?",
        answers: {
            A: "At the bottom of the slow-scan TV segment, near 14.230 MHz",
            B: "At the top of the SSB phone segment, near 14.325 MHz",
            C: "In the middle of the CW segment, near 14.100 MHz",
            D: "Between 14.070 MHz and 14.100 MHz"
        },
        correct: "D"
    },
    {
        question: "How do you join a contact between two stations using the PACTOR protocol?",
        answers: {
            A: "Send broadcast packets containing your call sign while in MONITOR mode",
            B: "Transmit a steady carrier until the PACTOR protocol times out and disconnects",
            C: "Joining an existing contact is not possible, PACTOR connections are limited to two stations",
            D: "Send a NAK code"
        },
        correct: "C"
    },
    {
        question: "Which of the following is a way to establish contact with a digital messaging system gateway station?",
        answers: {
            A: "Send an email to the system control operator",
            B: "Send QRL in Morse code",
            C: "Respond when the station broadcasts its SSID",
            D: "Transmit a connect message on the station’s published frequency"
        },
        correct: "D"
    },
    {
        question: "What is the primary purpose of an Amateur Radio Emergency Data Network (AREDN) mesh network?",
        answers: {
            A: "To provide FM repeater coverage in remote areas",
            B: "To provide real time propagation data by monitoring amateur radio transmissions worldwide",
            C: "To provide high-speed data services during an emergency or community event",
            D: "To provide DX spotting reports to aid contesters and DXers"
        },
        correct: "C"
    },
    {
        question: "Which of the following describes Winlink?",
        answers: {
            A: "An amateur radio wireless network to send and receive email on the internet",
            B: "A form of Packet Radio",
            C: "A wireless network capable of both VHF and HF band operation",
            D: "All of the above"
        },
        correct: "D"
    },
    {
        question: "What is another name for a Winlink Remote Message Server?",
        answers: {
            A: "Terminal Node Controller",
            B: "Gateway",
            C: "RJ-45",
            D: "Printer/Server"
        },
        correct: "B"
    },
    {
        question: "What could be wrong if you cannot decode an RTTY or other FSK signal even though it is apparently tuned in properly?",
        answers: {
            A: "The mark and space frequencies may be reversed",
            B: "You may have selected the wrong baud rate",
            C: "You may be listening on the wrong sideband",
            D: "All these choices are correct"
        },
        correct: "D"
    },
    {
        question: "Which of the following is a common location for FT8?",
        answers: {
            A: "Anywhere in the voice portion of the band",
            B: "Anywhere in the CW portion of the band",
            C: "Approximately 14.074 MHz to 14.077 MHz",
            D: "Approximately 14.110 MHz to 14.113 MHz"
        },
        correct: "C"
    },
    // SUBELEMENT G3 – RADIO WAVE PROPAGATION
    {
        question: "How does a higher sunspot number affect HF propagation?",
        answers: {
            A: "Higher sunspot numbers generally indicate a greater probability of good propagation at higher frequencies",
            B: "Lower sunspot numbers generally indicate greater probability of sporadic E propagation",
            C: "A zero sunspot number indicates that radio propagation is not possible on any band",
            D: "A zero sunspot number indicates undisturbed conditions"
        },
        correct: "A"
    },
    {
        question: "What effect does a sudden ionospheric disturbance have on the daytime ionospheric propagation?",
        answers: {
            A: "It enhances propagation on all HF frequencies",
            B: "It disrupts signals on lower frequencies more than those on higher frequencies",
            C: "It disrupts communications via satellite more than direct communications",
            D: "None, because only areas on the night side of the Earth are affected"
        },
        correct: "B"
    },
    {
        question: "Approximately how long does it take the increased ultraviolet and X-ray radiation from a solar flare to affect radio propagation on Earth?",
        answers: {
            A: "28 days",
            B: "1 to 2 hours",
            C: "8 minutes",
            D: "20 to 40 hours"
        },
        correct: "C"
    },
    {
        question: "Which of the following are the least reliable bands for long-distance communications during periods of low solar activity?",
        answers: {
            A: "80 meters and 160 meters",
            B: "60 meters and 40 meters",
            C: "30 meters and 20 meters",
            D: "15 meters, 12 meters, and 10 meters"
        },
        correct: "D"
    },
    {
        question: "What is the solar flux index?",
        answers: {
            A: "A measure of the highest frequency that is useful for ionospheric propagation between two points on Earth",
            B: "A count of sunspots that is adjusted for solar emissions",
            C: "Another name for the American sunspot number",
            D: "A measure of solar radiation with a wavelength of 10.7 centimeters"
        },
        correct: "D"
    },
    {
        question: "What is a geomagnetic storm?",
        answers: {
            A: "A sudden drop in the solar flux index",
            B: "A thunderstorm that affects radio propagation",
            C: "Ripples in the geomagnetic force",
            D: "A temporary disturbance in Earth’s geomagnetic field"
        },
        correct: "D"
    },
    {
        question: "At what point in the solar cycle does the 20-meter band usually support worldwide propagation during daylight hours?",
        answers: {
            A: "At the summer solstice",
            B: "Only at the maximum point",
            C: "Only at the minimum point",
            D: "At any point"
        },
        correct: "D"
    },
    {
        question: "How can a geomagnetic storm affect HF propagation?",
        answers: {
            A: "Improve high-latitude HF propagation",
            B: "Degrade ground wave propagation",
            C: "Improve ground wave propagation",
            D: "Degrade high-latitude HF propagation"
        },
        correct: "D"
    },
    {
        question: "How can high geomagnetic activity benefit radio communications?",
        answers: {
            A: "Creates auroras that can reflect VHF signals",
            B: "Increases signal strength for HF signals passing through the polar regions",
            C: "Improve HF long path propagation",
            D: "Reduce long delayed echoes"
        },
        correct: "A"
    },
    {
        question: "What causes HF propagation conditions to vary periodically in a 26- to 28-day cycle?",
        answers: {
            A: "Long term oscillations in the upper atmosphere",
            B: "Cyclic variation in Earth’s radiation belts",
            C: "Rotation of the Sun’s surface layers around its axis",
            D: "The position of the Moon in its orbit"
        },
        correct: "C"
    },
    {
        question: "How long does it take a coronal mass ejection to affect radio propagation on Earth?",
        answers: {
            A: "28 days",
            B: "14 days",
            C: "4 to 8 minutes",
            D: "15 hours to several days"
        },
        correct: "D"
    },
    {
        question: "What does the K-index measure?",
        answers: {
            A: "The relative position of sunspots on the surface of the Sun",
            B: "The short-term stability of Earth’s geomagnetic field",
            C: "The short-term stability of the Sun’s magnetic field",
            D: "The solar radio flux at Boulder, Colorado"
        },
        correct: "B"
    },
    {
        question: "What does the A-index measure?",
        answers: {
            A: "The relative position of sunspots on the surface of the Sun",
            B: "The amount of polarization of the Sun’s electric field",
            C: "The long-term stability of Earth’s geomagnetic field",
            D: "The solar radio flux at Boulder, Colorado"
        },
        correct: "C"
    },
    {
        question: "How is long distance radio communication usually affected by the charged particles that reach Earth from solar coronal holes?",
        answers: {
            A: "HF communication is improved",
            B: "HF communication is disturbed",
            C: "VHF/UHF ducting is improved",
            D: "VHF/UHF ducting is disturbed"
        },
        correct: "B"
    },
    {
        question: "What is a characteristic of skywave signals arriving at your location by both short-path and long-path propagation?",
        answers: {
            A: "Periodic fading approximately every 10 seconds",
            B: "Signal strength increased by 3 dB",
            C: "The signal might be cancelled causing severe attenuation",
            D: "A slightly delayed echo might be heard"
        },
        correct: "D"
    },
    {
        question: "What factors affect the MUF?",
        answers: {
            A: "Path distance and location",
            B: "Time of day and season",
            C: "Solar radiation and ionospheric disturbances",
            D: "All these choices are correct"
        },
        correct: "D"
    },
    {
        question: "Which frequency will have the least attenuation for long-distance skip propagation?",
        answers: {
            A: "Just below the MUF",
            B: "Just above the LUF",
            C: "Just below the critical frequency",
            D: "Just above the critical frequency"
        },
        correct: "A"
    },
    {
        question: "Which of the following is a way to determine current propagation on a desired band from your station?",
        answers: {
            A: "Use a network of automated receiving stations on the internet to see where your transmissions are being received",
            B: "Check the A-index",
            C: "Send a series of dots and listen for echoes",
            D: "All these choices are correct"
        },
        correct: "A"
    },
    {
        question: "How does the ionosphere affect radio waves with frequencies below the MUF and above the LUF?",
        answers: {
            A: "They are refracted back to Earth",
            B: "They pass through the ionosphere",
            C: "They are amplified by interaction with the ionosphere",
            D: "They are refracted and trapped in the ionosphere to circle Earth"
        },
        correct: "A"
    },
    {
        question: "What usually happens to radio waves with frequencies below the LUF?",
        answers: {
            A: "They are refracted back to Earth",
            B: "They pass through the ionosphere",
            C: "They are attenuated before reaching the destination",
            D: "They are refracted and trapped in the ionosphere to circle Earth"
        },
        correct: "C"
    },
    {
        question: "What does LUF stand for?",
        answers: {
            A: "The Lowest Usable Frequency for communications between two specific points",
            B: "Lowest Usable Frequency for communications to any point outside a 100-mile radius",
            C: "The Lowest Usable Frequency during a 24-hour period",
            D: "Lowest Usable Frequency during the past 60 minutes"
        },
        correct: "A"
    },
    {
        question: "What does MUF stand for?",
        answers: {
            A: "The Minimum Usable Frequency for communications between two points",
            B: "The Maximum Usable Frequency for communications between two points",
            C: "The Minimum Usable Frequency during a 24-hour period",
            D: "The Maximum Usable Frequency during a 24-hour period"
        },
        correct: "B"
    },
    {
        question: "What is the approximate maximum distance along the Earth’s surface normally covered in one hop using the F2 region?",
        answers: {
            A: "180 miles",
            B: "1,200 miles",
            C: "2,500 miles",
            D: "12,000 miles"
        },
        correct: "C"
    },
    {
        question: "What is the approximate maximum distance along the Earth’s surface normally covered in one hop using the E region?",
        answers: {
            A: "180 miles",
            B: "1,200 miles",
            C: "2,500 miles",
            D: "12,000 miles"
        },
        correct: "B"
    },
    {
        question: "What happens to HF propagation when the LUF exceeds the MUF?",
        answers: {
            A: "Propagation via ordinary skywave communications is not possible over that path",
            B: "HF communications over the path are enhanced",
            C: "Double-hop propagation along the path is more common",
            D: "Propagation over the path on all HF frequencies is enhanced"
        },
        correct: "A"
    },
    {
        question: "Which of the following is typical of the lower HF frequencies during the summer?",
        answers: {
            A: "Poor propagation at any time of day",
            B: "World-wide propagation during daylight hours",
            C: "Heavy distortion on signals due to photon absorption",
            D: "High levels of atmospheric noise or static"
        },
        correct: "D"
    },
    {
        question: "Which ionospheric region is closest to the surface of Earth?",
        answers: {
            A: "The D region",
            B: "The E region",
            C: "The F1 region",
            D: "The F2 region"
        },
        correct: "A"
    },
    {
        question: "What is meant by the term “critical frequency” at a given incidence angle?",
        answers: {
            A: "The highest frequency which is refracted back to Earth",
            B: "The lowest frequency which is refracted back to Earth",
            C: "The frequency at which the signal-to-noise ratio approaches unity",
            D: "The frequency at which the signal-to-noise ratio is 6 dB"
        },
        correct: "A"
    },
    {
        question: "Why is skip propagation via the F2 region longer than that via the other ionospheric regions?",
        answers: {
            A: "Because it is the densest",
            B: "Because of the Doppler effect",
            C: "Because it is the highest",
            D: "Because of temperature inversions"
        },
        correct: "C"
    },
    {
        question: "What does the term “critical angle” mean, as applied to radio wave propagation?",
        answers: {
            A: "The long path azimuth of a distant station",
            B: "The short path azimuth of a distant station",
            C: "The lowest takeoff angle that will return a radio wave to Earth under specific ionospheric conditions",
            D: "The highest takeoff angle that will return a radio wave to Earth under specific ionospheric conditions"
        },
        correct: "D"
    },
    {
        question: "Why is long-distance communication on the 40-, 60-, 80-, and 160-meter bands more difficult during the day?",
        answers: {
            A: "The F region absorbs signals at these frequencies during daylight hours",
            B: "The F region is unstable during daylight hours",
            C: "The D region absorbs signals at these frequencies during daylight hours",
            D: "The E region is unstable during daylight hours"
        },
        correct: "C"
    },
    {
        question: "What is a characteristic of HF scatter?",
        answers: {
            A: "Phone signals have high intelligibility",
            B: "Signals have a fluttering sound",
            C: "There are very large, sudden swings in signal strength",
            D: "Scatter propagation occurs only at night"
        },
        correct: "B"
    },
    {
        question: "What makes HF scatter signals often sound distorted?",
        answers: {
            A: "The ionospheric region involved is unstable",
            B: "Ground waves are absorbing much of the signal",
            C: "The E region is not present",
            D: "Energy is scattered into the skip zone through several different paths"
        },
        correct: "D"
    },
    {
        question: "Why are HF scatter signals in the skip zone usually weak?",
        answers: {
            A: "Only a small part of the signal energy is scattered into the skip zone",
            B: "Signals are scattered from the magnetosphere, which is not a good reflector",
            C: "Propagation is via ground waves, which absorb most of the signal energy",
            D: "Propagation is via ducts in the F region, which absorb most of the energy"
        },
        correct: "A"
    },
    {
        question: "What type of propagation allows signals to be heard in the transmitting station’s skip zone?",
        answers: {
            A: "Faraday rotation",
            B: "Scatter",
            C: "Chordal hop",
            D: "Short-path"
        },
        correct: "B"
    },
    {
        question: "What is near vertical incidence skywave (NVIS) propagation?",
        answers: {
            A: "Propagation near the MUF",
            B: "Short distance MF or HF propagation at high elevation angles",
            C: "Long path HF propagation at sunrise and sunset",
            D: "Double hop propagation near the LUF"
        },
        correct: "B"
    },
    {
        question: "Which ionospheric region is the most absorbent of signals below 10 MHz during daylight hours?",
        answers: {
            A: "The F2 region",
            B: "The F1 region",
            C: "The E region",
            D: "The D region"
        },
        correct: "D"
    },
    // SUBELEMENT G4 – AMATEUR RADIO PRACTICES
    {
        question: "What is the purpose of the notch filter found on many HF transceivers?",
        answers: {
            A: "To restrict the transmitter voice bandwidth",
            B: "To reduce interference from carriers in the receiver passband",
            C: "To eliminate receiver interference from impulse noise sources",
            D: "To remove interfering splatter generated by signals on adjacent frequencies"
        },
        correct: "B"
    },
    {
        question: "What is the benefit of using the opposite or “reverse” sideband when receiving CW?",
        answers: {
            A: "Interference from impulse noise will be eliminated",
            B: "More stations can be accommodated within a given signal passband",
            C: "It may be possible to reduce or eliminate interference from other signals",
            D: "Accidental out-of-band operation can be prevented"
        },
        correct: "C"
    },
    {
        question: "How does a noise blanker work?",
        answers: {
            A: "By temporarily increasing received bandwidth",
            B: "By redirecting noise pulses into a filter capacitor",
            C: "By reducing receiver gain during a noise pulse",
            D: "By clipping noise peaks"
        },
        correct: "C"
    },
    {
        question: "What is the effect on plate current of the correct setting of a vacuum-tube RF power amplifier’s TUNE control?",
        answers: {
            A: "A pronounced peak",
            B: "A pronounced dip",
            C: "No change will be observed",
            D: "A slow, rhythmic oscillation"
        },
        correct: "B"
    },
    {
        question: "Why is automatic level control (ALC) used with an RF power amplifier?",
        answers: {
            A: "To balance the transmitter audio frequency response",
            B: "To reduce harmonic radiation",
            C: "To prevent excessive drive",
            D: "To increase overall efficiency"
        },
        correct: "C"
    },
    {
        question: "What is the purpose of an antenna tuner?",
        answers: {
            A: "Reduce the SWR in the feed line to the antenna",
            B: "Reduce the power dissipation in the feedline to the antenna",
            C: "Increase power transfer from the transmitter to the feed line",
            D: "All these choices are correct"
        },
        correct: "D"
    },
    {
        question: "What happens as a receiver’s noise reduction control level is increased?",
        answers: {
            A: "Received signals may become distorted",
            B: "Received frequency may become unstable",
            C: "CW signals may become severely attenuated",
            D: "Received frequency may shift several kHz"
        },
        correct: "A"
    },
    {
        question: "What is the correct adjustment for the LOAD or COUPLING control of a vacuum tube RF power amplifier?",
        answers: {
            A: "Minimum SWR on the antenna",
            B: "Minimum plate current without exceeding maximum allowable grid current",
            C: "Highest plate voltage while minimizing grid current",
            D: "Desired power output without exceeding maximum allowable plate current"
        },
        correct: "D"
    },
    {
        question: "What is the purpose of delaying RF output after activating a transmitter’s keying line to an external amplifier?",
        answers: {
            A: "To prevent key clicks on CW",
            B: "To prevent transient overmodulation",
            C: "To allow time for the amplifier to switch the antenna between the transceiver and the amplifier output",
            D: "To allow time for the amplifier power supply to reach operating level"
        },
        correct: "C"
    },
    {
        question: "What is the function of an electronic keyer?",
        answers: {
            A: "Automatic transmit/receive switching",
            B: "Automatic generation of dots and dashes for CW operation",
            C: "To allow time for switching the antenna from the receiver to the transmitter",
            D: "Computer interface for PSK and RTTY operation"
        },
        correct: "B"
    },
    {
        question: "Why should the ALC system be inactive when transmitting AFSK data signals?",
        answers: {
            A: "ALC will invert the modulation of the AFSK mode",
            B: "The ALC action distorts the signal",
            C: "When using digital modes, too much ALC activity can cause the transmitter to overheat",
            D: "All these choices are correct"
        },
        correct: "B"
    },
    {
        question: "Which of the following is a common use of the dual-VFO feature on a transceiver?",
        answers: {
            A: "To allow transmitting on two frequencies at once",
            B: "To permit full duplex operation -- that is, transmitting and receiving at the same time",
            C: "To transmit on one frequency and listen on another",
            D: "To improve frequency accuracy by allowing variable frequency output (VFO) operation"
        },
        correct: "C"
    },
    {
        question: "What is the purpose of using a receive attenuator?",
        answers: {
            A: "To prevent receiver overload from strong incoming signals",
            B: "To reduce the transmitter power when driving a linear amplifier",
            C: "To reduce power consumption when operating from batteries",
            D: "To reduce excessive audio level on strong signals"
        },
        correct: "A"
    },
    {
        question: "What item of test equipment contains horizontal and vertical channel amplifiers?",
        answers: {
            A: "An ohmmeter",
            B: "A signal generator",
            C: "An ammeter",
            D: "An oscilloscope"
        },
        correct: "D"
    },
    {
        question: "Which of the following is an advantage of an oscilloscope versus a digital voltmeter?",
        answers: {
            A: "An oscilloscope uses less power",
            B: "Complex impedances can be easily measured",
            C: "Greater precision",
            D: "Complex waveforms can be measured"
        },
        correct: "D"
    },
    {
        question: "Which of the following is the best instrument to use for checking the keying waveform of a CW transmitter?",
        answers: {
            A: "An oscilloscope",
            B: "A field strength meter",
            C: "A sidetone monitor",
            D: "A wavemeter"
        },
        correct: "A"
    },
    {
        question: "What signal source is connected to the vertical input of an oscilloscope when checking the RF envelope pattern of a transmitted signal?",
        answers: {
            A: "The local oscillator of the transmitter",
            B: "An external RF oscillator",
            C: "The transmitter balanced mixer output",
            D: "The attenuated RF output of the transmitter"
        },
        correct: "D"
    },
    {
        question: "Why do voltmeters have high input impedance?",
        answers: {
            A: "It improves the frequency response",
            B: "It allows for higher voltages to be safely measured",
            C: "It improves the resolution of the readings",
            D: "It decreases the loading on circuits being measured"
        },
        correct: "D"
    },
    {
        question: "What is an advantage of a digital multimeter as compared to an analog multimeter?",
        answers: {
            A: "Better for measuring computer circuits",
            B: "Less prone to overload",
            C: "Higher precision",
            D: "Faster response"
        },
        correct: "C"
    },
    {
        question: "What signals are used to conduct a two-tone test?",
        answers: {
            A: "Two audio signals of the same frequency shifted 90 degrees",
            B: "Two non-harmonically related audio signals",
            C: "Two swept frequency tones",
            D: "Two audio frequency range square wave signals of equal amplitude"
        },
        correct: "B"
    },
    {
        question: "What transmitter performance parameter does a two-tone test analyze?",
        answers: {
            A: "Linearity",
            B: "Percentage of suppression of the carrier and undesired sideband for SSB",
            C: "Percentage of frequency modulation",
            D: "Percentage of carrier phase shift"
        },
        correct: "A"
    },
    {
        question: "When is an analog multimeter preferred to a digital multimeter?",
        answers: {
            A: "When testing logic circuits",
            B: "When high precision is desired",
            C: "When measuring the frequency of an oscillator",
            D: "When adjusting circuits for maximum or minimum values"
        },
        correct: "D"
    },
    {
        question: "Which of the following can be determined with a directional wattmeter?",
        answers: {
            A: "Standing wave ratio",
            B: "Antenna front-to-back ratio",
            C: "RF interference",
            D: "Radio wave propagation"
        },
        correct: "A"
    },
    {
        question: "Which of the following must be connected to an antenna analyzer when it is being used for SWR measurements?",
        answers: {
            A: "Receiver",
            B: "Transmitter",
            C: "Antenna and feed line",
            D: "All these choices are correct"
        },
        correct: "C"
    },
    {
        question: "What effect can strong signals from nearby transmitters have on an antenna analyzer?",
        answers: {
            A: "Desensitization which can cause intermodulation products which interfere with impedance readings",
            B: "Received power that interferes with SWR readings",
            C: "Generation of harmonics which interfere with frequency readings",
            D: "All these choices are correct"
        },
        correct: "B"
    },
    {
        question: "Which of the following can be measured with an antenna analyzer?",
        answers: {
            A: "Front-to-back ratio of an antenna",
            B: "Power output from a transmitter",
            C: "Im
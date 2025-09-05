// Subelement G1 – Commission’s Rules
const g1_questions = [
    // G1A
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
            D: "All these choices are correct"
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
    // G1B
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
    // G1C
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
    // G1D
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
    // G1E
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
    }
];
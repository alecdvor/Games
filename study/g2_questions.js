// Subelement G2 – Operating Procedures
const g2_questions = [
    // G2A
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
    // G2B
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
    // G2C
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
    // G2D
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
    // G2E
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
    }
];
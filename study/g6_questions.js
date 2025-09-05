// Subelement G6 – Circuit Components
const g6_questions = [
    // G6A
    {
        question: "What is the minimum allowable discharge voltage for maximum life of a standard 12-volt lead-acid battery?",
        answers: {
            A: "6 volts",
            B: "8.5 volts",
            C: "10.5 volts",
            D: "12 volts"
        },
        correct: "C"
    },
    {
        question: "What is an advantage of batteries with low internal resistance?",
        answers: {
            A: "Long life",
            B: "High discharge current",
            C: "High voltage",
            D: "Rapid recharge"
        },
        correct: "B"
    },
    {
        question: "What is the approximate forward threshold voltage of a germanium diode?",
        answers: {
            A: "0.1 volt",
            B: "0.3 volts",
            C: "0.7 volts",
            D: "1.0 volts"
        },
        correct: "B"
    },
    {
        question: "Which of the following is characteristic of an electrolytic capacitor?",
        answers: {
            A: "Tight tolerance",
            B: "Much less leakage than any other type",
            C: "High capacitance for a given volume",
            D: "Inexpensive RF capacitor"
        },
        correct: "C"
    },
    {
        question: "What is the approximate forward threshold voltage of a silicon junction diode?",
        answers: {
            A: "0.1 volt",
            B: "0.3 volts",
            C: "0.7 volts",
            D: "1.0 volts"
        },
        correct: "C"
    },
    {
        question: "Why should wire-wound resistors not be used in RF circuits?",
        answers: {
            A: "The resistor’s tolerance value would not be adequate",
            B: "The resistor’s inductance could make circuit performance unpredictable",
            C: "The resistor could overheat",
            D: "The resistor’s internal capacitance would detune the circuit"
        },
        correct: "B"
    },
    {
        question: "What are the operating points for a bipolar transistor used as a switch?",
        answers: {
            A: "Saturation and cutoff",
            B: "The active region (between cutoff and saturation)",
            C: "Peak and valley current points",
            D: "Enhancement and depletion modes"
        },
        correct: "A"
    },
    {
        question: "Which of the following is characteristic of low voltage ceramic capacitors?",
        answers: {
            A: "Tight tolerance",
            B: "High stability",
            C: "High capacitance for given volume",
            D: "Comparatively low cost"
        },
        correct: "D"
    },
    {
        question: "Which of the following describes MOSFET construction?",
        answers: {
            A: "The gate is formed by a back-biased junction",
            B: "The gate is separated from the channel by a thin insulating layer",
            C: "The source is separated from the drain by a thin insulating layer",
            D: "The source is formed by depositing metal on silicon"
        },
        correct: "B"
    },
    {
        question: "Which element of a vacuum tube regulates the flow of electrons between cathode and plate?",
        answers: {
            A: "Control grid",
            B: "Suppressor grid",
            C: "Screen grid",
            D: "Trigger electrode"
        },
        correct: "A"
    },
    {
        question: "What happens when an inductor is operated above its self-resonant frequency?",
        answers: {
            A: "Its reactance increases",
            B: "Harmonics are generated",
            C: "It becomes capacitive",
            D: "Catastrophic failure is likely"
        },
        correct: "C"
    },
    {
        question: "What is the primary purpose of a screen grid in a vacuum tube?",
        answers: {
            A: "To reduce grid-to-plate capacitance",
            B: "To increase efficiency",
            C: "To increase the control grid resistance",
            D: "To decrease plate resistance"
        },
        correct: "A"
    },
    // G6B
    {
        question: "What determines the performance of a ferrite core at different frequencies?",
        answers: {
            A: "Its conductivity",
            B: "Its thickness",
            C: "The composition, or “mix,” of materials used",
            D: "The ratio of outer diameter to inner diameter"
        },
        correct: "C"
    },
    {
        question: "What is meant by the term MMIC?",
        answers: {
            A: "Multi-Mode Integrated Circuit",
            B: "Monolithic Microwave Integrated Circuit",
            C: "Metal Monolayer Integrated Circuit",
            D: "Mode Modulated Integrated Circuit"
        },
        correct: "B"
    },
    {
        question: "Which of the following is an advantage of CMOS integrated circuits compared to TTL integrated circuits?",
        answers: {
            A: "Low power consumption",
            B: "High power handling capability",
            C: "Better suited for RF amplification",
            D: "Better suited for power supply regulation"
        },
        correct: "A"
    },
    {
        question: "What is a typical upper frequency limit for low SWR operation of 50-ohm BNC connectors?",
        answers: {
            A: "50 MHz",
            B: "500 MHz",
            C: "4 GHz",
            D: "40 GHz"
        },
        correct: "C"
    },
    {
        question: "What is an advantage of using a ferrite core toroidal inductor?",
        answers: {
            A: "Large values of inductance may be obtained",
            B: "The magnetic properties of the core may be optimized for a specific range of frequencies",
            C: "Most of the magnetic field is contained in the core",
            D: "All these choices are correct"
        },
        correct: "D"
    },
    {
        question: "What kind of device is an integrated circuit operational amplifier?",
        answers: {
            A: "Digital",
            B: "MMIC",
            C: "Programmable Logic",
            D: "Analog"
        },
        correct: "D"
    },
    {
        question: "Which of the following describes a type N connector?",
        answers: {
            A: "A moisture-resistant RF connector useful to 10 GHz",
            B: "A small bayonet connector used for data circuits",
            C: "A low noise figure VHF connector",
            D: "A nickel plated version of the PL-259"
        },
        correct: "A"
    },
    {
        question: "How is an LED biased when emitting light?",
        answers: {
            A: "In the tunnel-effect region",
            B: "At the Zener voltage",
            C: "Reverse biased",
            D: "Forward biased"
        },
        correct: "D"
    },
    {
        question: "How does a ferrite bead or core reduce common-mode RF current on the shield of a coaxial cable?",
        answers: {
            A: "By creating an impedance in the current’s path",
            B: "It converts common-mode current to differential mode current",
            C: "By creating an out-of-phase current to cancel the common-mode current",
            D: "Ferrites expel magnetic fields"
        },
        correct: "A"
    },
    {
        question: "What is an SMA connector?",
        answers: {
            A: "A type-S to type-M adaptor",
            B: "A small threaded connector suitable for signals up to several GHz",
            C: "A connector designed for serial multiple access signals",
            D: "A type of push-on connector intended for high-voltage applications"
        },
        correct: "B"
    },
    {
        question: "Which of these connector types is commonly used for low frequency or dc signal connections to a transceiver?",
        answers: {
            A: "PL-259",
            B: "BNC",
            C: "RCA Phono",
            D: "Type N"
        },
        correct: "C"
    }
];
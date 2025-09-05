// Subelement G5 – Electrical Principles
const g5_questions = [
    // G5A
    {
        question: "What happens when inductive and capacitive reactance are equal in a series LC circuit?",
        answers: {
            A: "Resonance causes impedance to be very high",
            B: "Impedance is equal to the geometric mean of the inductance and capacitance",
            C: "Resonance causes impedance to be very low",
            D: "Impedance is equal to the arithmetic mean of the inductance and capacitance"
        },
        correct: "C"
    },
    {
        question: "What is reactance?",
        answers: {
            A: "Opposition to the flow of direct current caused by resistance",
            B: "Opposition to the flow of alternating current caused by capacitance or inductance",
            C: "Reinforcement of the flow of direct current caused by resistance",
            D: "Reinforcement of the flow of alternating current caused by capacitance or inductance"
        },
        correct: "B"
    },
    {
        question: "Which of the following is opposition to the flow of alternating current in an inductor?",
        answers: {
            A: "Conductance",
            B: "Reluctance",
            C: "Admittance",
            D: "Reactance"
        },
        correct: "D"
    },
    {
        question: "Which of the following is opposition to the flow of alternating current in a capacitor?",
        answers: {
            A: "Conductance",
            B: "Reluctance",
            C: "Reactance",
            D: "Admittance"
        },
        correct: "C"
    },
    {
        question: "How does an inductor react to AC?",
        answers: {
            A: "As the frequency of the applied AC increases, the reactance decreases",
            B: "As the amplitude of the applied AC increases, the reactance increases",
            C: "As the amplitude of the applied AC increases, the reactance decreases",
            D: "As the frequency of the applied AC increases, the reactance increases"
        },
        correct: "D"
    },
    {
        question: "How does a capacitor react to AC?",
        answers: {
            A: "As the frequency of the applied AC increases, the reactance decreases",
            B: "As the frequency of the applied AC increases, the reactance increases",
            C: "As the amplitude of the applied AC increases, the reactance increases",
            D: "As the amplitude of the applied AC increases, the reactance decreases"
        },
        correct: "A"
    },
    {
        question: "What is the term for the inverse of impedance?",
        answers: {
            A: "Conductance",
            B: "Susceptance",
            C: "Reluctance",
            D: "Admittance"
        },
        correct: "D"
    },
    {
        question: "What is impedance?",
        answers: {
            A: "The ratio of current to voltage",
            B: "The product of current and voltage",
            C: "The ratio of voltage to current",
            D: "The product of current and reactance"
        },
        correct: "C"
    },
    {
        question: "What unit is used to measure reactance?",
        answers: {
            A: "Farad",
            B: "Ohm",
            C: "Ampere",
            D: "Siemens"
        },
        correct: "B"
    },
    {
        question: "Which of the following devices can be used for impedance matching at radio frequencies?",
        answers: {
            A: "A transformer",
            B: "A Pi-network",
            C: "A length of transmission line",
            D: "All these choices are correct"
        },
        correct: "D"
    },
    {
        question: "What letter is used to represent reactance?",
        answers: {
            A: "Z",
            B: "X",
            C: "B",
            D: "Y"
        },
        correct: "B"
    },
    {
        question: "What occurs in an LC circuit at resonance?",
        answers: {
            A: "Current and voltage are equal",
            B: "Resistance is cancelled",
            C: "The circuit radiates all its energy in the form of radio waves",
            D: "Inductive reactance and capacitive reactance cancel"
        },
        correct: "D"
    },
    // G5B
    {
        question: "What dB change represents a factor of two increase or decrease in power?",
        answers: {
            A: "Approximately 2 dB",
            B: "Approximately 3 dB",
            C: "Approximately 6 dB",
            D: "Approximately 9 dB"
        },
        correct: "B"
    },
    {
        question: "How does the total current relate to the individual currents in a circuit of parallel resistors?",
        answers: {
            A: "It equals the average of the branch currents",
            B: "It decreases as more parallel branches are added to the circuit",
            C: "It equals the sum of the currents through each branch",
            D: "It is the sum of the reciprocal of each individual voltage drop"
        },
        correct: "C"
    },
    {
        question: "How many watts of electrical power are consumed if 400 VDC is supplied to an 800-ohm load?",
        answers: {
            A: "0.5 watts",
            B: "200 watts",
            C: "400 watts",
            D: "3200 watts"
        },
        correct: "B"
    },
    {
        question: "How many watts of electrical power are consumed by a 12 VDC light bulb that draws 0.2 amperes?",
        answers: {
            A: "2.4 watts",
            B: "24 watts",
            C: "6 watts",
            D: "60 watts"
        },
        correct: "A"
    },
    {
        question: "How many watts are consumed when a current of 7.0 milliamperes flows through a 1,250-ohm resistance?",
        answers: {
            A: "Approximately 61 milliwatts",
            B: "Approximately 61 watts",
            C: "Approximately 11 milliwatts",
            D: "Approximately 11 watts"
        },
        correct: "A"
    },
    {
        question: "What is the PEP produced by 200 volts peak-to-peak across a 50-ohm dummy load?",
        answers: {
            A: "1.4 watts",
            B: "100 watts",
            C: "353.5 watts",
            D: "400 watts"
        },
        correct: "B"
    },
    {
        question: "What value of an AC signal produces the same power dissipation in a resistor as a DC voltage of the same value?",
        answers: {
            A: "The peak-to-peak value",
            B: "The peak value",
            C: "The RMS value",
            D: "The reciprocal of the RMS value"
        },
        correct: "C"
    },
    {
        question: "What is the peak-to-peak voltage of a sine wave with an RMS voltage of 120 volts?",
        answers: {
            A: "84.8 volts",
            B: "169.7 volts",
            C: "240.0 volts",
            D: "339.4 volts"
        },
        correct: "D"
    },
    {
        question: "What is the RMS voltage of a sine wave with a value of 17 volts peak?",
        answers: {
            A: "8.5 volts",
            B: "12 volts",
            C: "24 volts",
            D: "34 volts"
        },
        correct: "B"
    },
    {
        question: "What percentage of power loss is equivalent to a loss of 1 dB?",
        answers: {
            A: "10.9 percent",
            B: "12.2 percent",
            C: "20.6 percent",
            D: "25.9 percent"
        },
        correct: "C"
    },
    {
        question: "What is the ratio of PEP to average power for an unmodulated carrier?",
        answers: {
            A: "0.707",
            B: "1.00",
            C: "1.414",
            D: "2.00"
        },
        correct: "B"
    },
    {
        question: "What is the RMS voltage across a 50-ohm dummy load dissipating 1200 watts?",
        answers: {
            A: "173 volts",
            B: "245 volts",
            C: "346 volts",
            D: "692 volts"
        },
        correct: "B"
    },
    {
        question: "What is the output PEP of an unmodulated carrier if the average power is 1060 watts?",
        answers: {
            A: "530 watts",
            B: "1060 watts",
            C: "1500 watts",
            D: "2120 watts"
        },
        correct: "B"
    },
    {
        question: "What is the output PEP of 500 volts peak-to-peak across a 50-ohm load?",
        answers: {
            A: "8.75 watts",
            B: "625 watts",
            C: "2500 watts",
            D: "5000 watts"
        },
        correct: "B"
    },
    // G5C
    {
        question: "What causes a voltage to appear across the secondary winding of a transformer when an AC voltage source is connected across its primary winding?",
        answers: {
            A: "Capacitive coupling",
            B: "Displacement current coupling",
            C: "Mutual inductance",
            D: "Mutual capacitance"
        },
        correct: "C"
    },
    {
        question: "What is the output voltage if an input signal is applied to the secondary winding of a 4:1 voltage step-down transformer instead of the primary winding?",
        answers: {
            A: "The input voltage is multiplied by 4",
            B: "The input voltage is divided by 4",
            C: "Additional resistance must be added in series with the primary to prevent overload",
            D: "Additional resistance must be added in parallel with the secondary to prevent overload"
        },
        correct: "A"
    },
    {
        question: "What is the total resistance of a 10-, a 20-, and a 50-ohm resistor connected in parallel?",
        answers: {
            A: "5.9 ohms",
            B: "0.17 ohms",
            C: "17 ohms",
            D: "80 ohms"
        },
        correct: "A"
    },
    {
        question: "What is the approximate total resistance of a 100- and a 200-ohm resistor in parallel?",
        answers: {
            A: "300 ohms",
            B: "150 ohms",
            C: "75 ohms",
            D: "67 ohms"
        },
        correct: "D"
    },
    {
        question: "Why is the primary winding wire of a voltage step-up transformer usually a larger size than that of the secondary winding?",
        answers: {
            A: "To improve the coupling between the primary and secondary",
            B: "To accommodate the higher current of the primary",
            C: "To prevent parasitic oscillations due to resistive losses in the primary",
            D: "To ensure that the volume of the primary winding is equal to the volume of the secondary winding"
        },
        correct: "B"
    },
    {
        question: "What is the voltage output of a transformer with a 500-turn primary and a 1500-turn secondary when 120 VAC is applied to the primary?",
        answers: {
            A: "360 volts",
            B: "120 volts",
            C: "40 volts",
            D: "25.5 volts"
        },
        correct: "A"
    },
    {
        question: "What transformer turns ratio matches an antenna’s 600-ohm feed point impedance to a 50-ohm coaxial cable?",
        answers: {
            A: "3.5 to 1",
            B: "12 to 1",
            C: "24 to 1",
            D: "144 to 1"
        },
        correct: "A"
    },
    {
        question: "What is the equivalent capacitance of two 5.0-nanofarad capacitors and one 750-picofarad capacitor connected in parallel?",
        answers: {
            A: "576.9 nanofarads",
            B: "1,733 picofarads",
            C: "3,583 picofarads",
            D: "10.750 nanofarads"
        },
        correct: "D"
    },
    {
        question: "What is the capacitance of three 100-microfarad capacitors connected in series?",
        answers: {
            A: "0.33 microfarads",
            B: "3.0 microfarads",
            C: "33.3 microfarads",
            D: "300 microfarads"
        },
        correct: "C"
    },
    {
        question: "What is the inductance of three 10-millihenry inductors connected in parallel?",
        answers: {
            A: "0.30 henries",
            B: "3.3 henries",
            C: "3.3 millihenries",
            D: "30 millihenries"
        },
        correct: "C"
    },
    {
        question: "What is the inductance of a circuit with a 20-millihenry inductor connected in series with a 50-millihenry inductor?",
        answers: {
            A: "7 millihenries",
            B: "14.3 millihenries",
            C: "70 millihenries",
            D: "1,000 millihenries"
        },
        correct: "C"
    },
    {
        question: "What is the capacitance of a 20-microfarad capacitor connected in series with a 50-microfarad capacitor?",
        answers: {
            A: "0.07 microfarads",
            B: "14.3 microfarads",
            C: "70 microfarads",
            D: "1,000 microfarads"
        },
        correct: "B"
    },
    {
        question: "Which of the following components should be added to a capacitor to increase the capacitance?",
        answers: {
            A: "An inductor in series",
            B: "An inductor in parallel",
            C: "A capacitor in parallel",
            D: "A capacitor in series"
        },
        correct: "C"
    },
    {
        question: "Which of the following components should be added to an inductor to increase the inductance?",
        answers: {
            A: "A capacitor in series",
            B: "A capacitor in parallel",
            C: "An inductor in parallel",
            D: "An inductor in series"
        },
        correct: "D"
    }
];
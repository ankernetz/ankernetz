"use client";
import Link from "next/link";
import {
  Phone, Heart, Shield, Brain, Star, Clock,
  CheckCircle, ArrowRight, Users, FileText,
  Baby, Home, BookOpen, Stethoscope, HandHeart,
  Eye, AlertTriangle, UserCheck, ClipboardList,
  MessageSquare, ChevronDown, Lock, Zap, Activity,
  TreePine, Sun, Smile,
} from "lucide-react";

import { SeoFaqSchema } from "../components/SeoFaqSchema";
import { SeoBreadcrumb } from "../components/SeoBreadcrumb";
import { useT } from "../i18n/useT";

const TRANS = {
  de: {
    heroEyebrow: "Ankernetz Frühe Hilfen",
    heroTitle1: "Schutz von",
    heroTitle2: "Anfang an.",
    heroSub: "Die ersten Lebensjahre entscheiden über alles. Unser Team schützt und begleitet Kleinkinder in besonders vulnerablen Situationen - bindungsorientiert, entwicklungsfördernd und mit höchster Fachlichkeit.",
    heroPlatzBtn: "Platzanfrage stellen",
    kennzahlen: [
      { wert: "0-6", label: "Jahre - früheste und vulnerabelste Lebensphase" },
      { wert: "24/7", label: "Notaufnahme bei akuter Kindeswohlgefährdung" },
      { wert: "100%", label: "Bindungsorientierter Ansatz in allen Bereichen" },
      { wert: "15+", label: "Jahre Erfahrung in der Kleinstkinderarbeit" },
    ],
    einlEyebrow: "Was sind Frühe Hilfen?",
    einlH2: "Die ersten Jahre wirken ein Leben lang.",
    einlP1: "Frühe Hilfen sind ein spezialisiertes Angebot der Kinder- und Jugendhilfe, das Säuglinge und Kleinkinder in den ersten Lebensjahren schützt, fördert und begleitet. Sie greifen dann, wenn das familiäre Umfeld nicht in der Lage ist, die notwendige Fürsorge zu leisten.",
    einlP2: "Die Forschung ist eindeutig: Was in den ersten 1000 Tagen eines Kindes passiert, legt die Grundlage für die gesamte weitere Entwicklung - kognitiv, emotional und sozial. Frühe Traumatisierung, Vernachlässigung und Bindungslosigkeit hinterlassen Spuren, die ohne professionelle Intervention ein Leben lang bestehen bleiben.",
    einlP3: "Unser Team kombiniert bindungsbasierte Pädagogik, entwicklungspsychologische Fachkompetenz und intensive Elternarbeit - damit aus einem schwierigen Start eine echte Chance werden kann.",
    checkItems: [
      "Bindungsaufbau als zentrales Entwicklungsfundament",
      "Entwicklungspsychologische Diagnostik und individuelle Förderpläne",
      "24/7-Notaufnahme bei akuter Kindeswohlgefährdung",
      "Strukturierte Elternarbeit und Rückführungsplanung",
      "Enge Kooperation mit Jugendamt und Familiengericht",
      "Medizinische Versorgung und heilpädagogische Begleitung",
      "Fachberatung für Kitas und Kindertageseinrichtungen",
      "Traumasensible Alltagsgestaltung nach wissenschaftlichem Standard",
    ],
    warnEyebrow: "Wann wir helfen",
    warnH2: "Indikationen für Frühe Hilfen",
    warnSub: "Frühe Hilfen werden aktiv, wenn das Kindeswohl gefährdet ist oder das familiäre System die notwendige Fürsorge nicht leisten kann.",
    warnsignale: [
      { titel: "Vernachlässigung", text: "Mangelnde Grundversorgung, fehlende Körperpflege, Unterernährung, unzureichende medizinische Versorgung." },
      { titel: "Kindeswohlgefährdung", text: "Akute oder latente Gefährdungssituationen, die einen sofortigen Schutz und eine Herausnahme aus dem familiären Umfeld erfordern." },
      { titel: "Entwicklungsverzögerungen", text: "Sprachliche, motorische oder kognitive Rückstände, die auf fehlende Förderung oder traumatische Erfahrungen zurückzuführen sind." },
      { titel: "Hochbelastete Familiensysteme", text: "Psychische Erkrankung der Bezugspersonen, Sucht, häusliche Gewalt oder Wohnungslosigkeit als Belastungsfaktoren." },
      { titel: "Bindungsstörungen", text: "Deutliche Zeichen unsicherer oder desorganisierter Bindungsmuster, die eine professionelle bindungspädagogische Arbeit erfordern." },
      { titel: "Neugeborene in Gefährdungslagen", text: "Säuglinge, deren Eltern nicht in der Lage sind, die notwendige Fürsorge zu gewährleisten - z.B. bei Sucht oder schwerer psychischer Erkrankung." },
    ],
    leistEyebrow: "Unser Leistungsangebot",
    leistH2: "Was wir für die Kleinsten leisten",
    leistungen: [
      { titel: "Schutzpflegestellen & Kleinstgruppen", text: "Aufnahme in familienähnlichen Schutzpflegestellen oder kleinen Gruppen mit maximal 4 Kindern. Enge Betreuungsschlüssel garantieren individuelle Zuwendung rund um die Uhr." },
      { titel: "Bindungsaufbau & Bindungsdiagnostik", text: "Systematische Einschätzung der Bindungsqualität mit validierten Verfahren. Gezielte Förderung sicherer Bindungserfahrungen als Grundlage jeder weiteren Entwicklung." },
      { titel: "Entwicklungspsychologische Förderung", text: "Individuelle Förderpläne basierend auf entwicklungspsychologischer Diagnostik. Sprache, Motorik, Kognition und sozio-emotionale Entwicklung werden gezielt begleitet." },
      { titel: "Medizinische & heilpädagogische Begleitung", text: "Kooperation mit Kinderärztinnen, Logopädie, Ergo- und Physiotherapie. Lückenlose medizinische Dokumentation und Vorsorgeuntersuchungen." },
      { titel: "Elternarbeit & Rückführungsplanung", text: "Strukturierte Elternarbeit mit dem Ziel der Rückführung - sofern das Kindeswohl dies erlaubt. Eltern werden begleitet, gestärkt und in den Hilfeprozess einbezogen." },
      { titel: "Kita-Kooperation & Bildungsförderung", text: "Enge Zusammenarbeit mit Kindertageseinrichtungen. Begleitung beim Kita-Einstieg, Unterstützung des Betreuungspersonals, Übergabeplanung." },
      { titel: "Traumasensible Alltagsgestaltung", text: "Jeder Alltag wird nach traumapädagogischen Prinzipien gestaltet: Verlässlichkeit, Vorhersehbarkeit, feinfühlige Reaktion - als tägliche Sprache der Sicherheit." },
      { titel: "Fachberatung für Kitas & Einrichtungen", text: "Externe Fachberatung für Kita-Teams bei Auffälligkeiten, Verdacht auf Kindeswohlgefährdung oder Fragen zur Entwicklungsbegleitung - niedrigschwellig und praxisnah." },
      { titel: "Dokumentation & Jugendamtskooperation", text: "Detaillierte Entwicklungsberichte, Verlaufsdokumentationen und Einschätzungen für das Jugendamt. Regelmäßige Hilfeplanvorbereitung und aktive HPG-Teilnahme." },
    ],
    ansatzEyebrow: "Unser Ansatz",
    ansatzH2: "Bindung. Feinfühligkeit. Schutz.",
    ansatz: [
      { nr: "01", titel: "Bindung als Fundament", text: "Jede Entwicklung baut auf sicherer Bindung auf. Unser gesamtes Team ist in bindungsbasierter Pädagogik ausgebildet - vom ersten Kontakt bis zur Übergabe." },
      { nr: "02", titel: "Feinfühligkeit als Haltung", text: "Wir nehmen Signale des Kindes ernst und antworten prompt, angemessen und konsistent. Feinfühligkeit ist keine Technik - sie ist unsere Grundhaltung." },
      { nr: "03", titel: "Entwicklung fördern, nicht erzwingen", text: "Jedes Kind hat sein eigenes Tempo. Wir begleiten, fordern und fördern - aber immer im Rhythmus des Kindes, nicht im Rhythmus der Institutionen." },
      { nr: "04", titel: "Schutz ohne Ausnahme", text: "Kindeswohlschutz steht über allem. Unsere Fachkräfte sind in Kinderschutz geschult und arbeiten nach klar definierten Schutzkonzepten." },
      { nr: "05", titel: "Eltern einbeziehen, nicht ersetzen", text: "Wir sind keine Alternative zur Familie - wir sind Unterstützer. Eltern werden wo immer möglich einbezogen, gestärkt und auf Rückführung vorbereitet." },
      { nr: "06", titel: "Langfristige Perspektive", text: "Frühe Hilfen sind keine Übergangslösung. Was in den ersten Lebensjahren entsteht, wirkt ein Leben lang. Wir denken in Entwicklungsjahren, nicht in Hilfedauern." },
    ],
    prozEyebrow: "Ablauf",
    prozH2: "Von der Meldung zur Perspektive",
    prozessSchritte: [
      { titel: "Meldung & Ersteinschätzung", text: "Jugendamt oder Familiengericht nimmt Kontakt auf. Innerhalb von 24 Stunden erste Rückmeldung zur Aufnahmekapazität und Passung.", dauer: "Tag 0" },
      { titel: "Aufnahme", text: "Geplante oder Sofortaufnahme - abgestimmt auf die Dringlichkeit. Strukturiertes Aufnahmegespräch mit Jugendamt und - wenn möglich - den Eltern.", dauer: "Tag 1" },
      { titel: "Eingewöhnung & Bindungsaufbau", text: "Behutsame erste Wochen mit klarer Bezugsperson. Fokus auf Sicherheit, Orientierung und erste Vertrauensbildung.", dauer: "Woche 1-4" },
      { titel: "Diagnostik & Förderplanung", text: "Entwicklungspsychologische Einschätzung, Bindungsdiagnostik und Erstellung des individuellen Förderplans - in Abstimmung mit dem Jugendamt.", dauer: "Monat 1-2" },
      { titel: "Perspektivklärung", text: "Regelmäßige Standortgespräche mit Jugendamt und Eltern. Planung der weiteren Hilfe: Rückführung, Anschlusspflege oder andere Perspektive.", dauer: "Laufend" },
    ],
    zielEyebrow: "Zielgruppe",
    zielH2: "Für wen sind Frühe Hilfen?",
    zielAlterLabel: "Jahre",
    zielAlterText: "Die vulnerabelste Lebensphase. Alles, was in diesen Jahren passiert, beeinflusst die körperliche, geistige und emotionale Entwicklung nachhaltig. Frühzeitiger Schutz ist keine Ausnahme - er ist die Regel.",
    zielItems: [
      { label: "Säuglinge & Kleinkinder (0-3)", desc: "Höchster Schutzbedarf, speziell geschultes Pflegepersonal, 24/7-Betreuung" },
      { label: "Kindergartenkinder (3-6)", desc: "Entwicklungsförderung, Kita-Integration, Bindungsarbeit und Elternbegleitung" },
      { label: "Kinder aus hochbelasteten Familien", desc: "Sucht, psychische Erkrankung, Armut, häusliche Gewalt als Belastungsfaktoren" },
      { label: "Kinder bei akuter Kindeswohlgefährdung", desc: "Sofortschutz, Notaufnahme und strukturierte Diagnostik im Krisenkontext" },
    ],
    teamEyebrow: "Unser Team",
    teamH2: "Spezialisierte Fachkräfte für die frühe Kindheit",
    teamProfile: [
      { titel: "Kleinstkinderpädagoginnen", text: "Spezialisiert auf 0-3-Jährige. Ausgebildet in Bindungstheorie, Pikler-Pädagogik und Entwicklungsbegleitung." },
      { titel: "Entwicklungspsychologinnen", text: "Diagnostik und Einschätzung mit validierten Verfahren. Individuelle Förderpläne auf wissenschaftlicher Grundlage." },
      { titel: "Bindungstherapeutinnen", text: "Gezielte therapeutische Arbeit bei Bindungsstörungen und frühen Traumatisierungen." },
      { titel: "Medizinische Fachkräfte", text: "Kooperierendes Kinderarztteam, Hebammen und Fachärztinnen für lückenlose Gesundheitsversorgung." },
      { titel: "Familien- & Elternberaterinnen", text: "Begleitung der Eltern auf dem Weg zur Rückführung oder zur eigenständigen Fürsorge." },
      { titel: "Kita-Fachberaterinnen", text: "Externe Beratung für Kindertageseinrichtungen im Netzwerk Ankernetz Frühe Hilfen." },
    ],
    fachEyebrow: "Für Jugendämter & Fachkräfte",
    fachH2: "Ihr Partner für frühen Kinderschutz",
    fachP: "Frühe Hilfen erfordern schnelle Reaktion und enge Kooperation. Wir verstehen Ihre Anforderungen an Dokumentation, Transparenz und fachliche Qualität.",
    fachBtn: "Platzanfrage stellen",
    fachItems: [
      "Direkter Zugang - Notaufnahmen auch nachts und am Wochenende",
      "Aufnahmebericht innerhalb von 48h nach Einzug",
      "Entwicklungspsychologische Ersteinschätzung nach 4 Wochen",
      "Monatliche Entwicklungsberichte mit Förderfortschritten",
      "Feste Ansprechperson für die gesamte Hilfedauer",
      "Aktive Teilnahme an Hilfeplangesprächen",
      "Strukturierte Elternarbeit und Rückführungsbegleitung",
      "Vollständige DSGVO-konforme Dokumentation",
    ],
    faqEyebrow: "Häufige Fragen",
    faqH2: "Was Fachkräfte und Eltern fragen",
    faq: [
      { frage: "Ab welchem Alter nehmen Sie Kinder auf?", antwort: "Wir nehmen Kinder ab dem Säuglingsalter auf - in Ausnahmefällen auch Neugeborene direkt nach der Geburt, wenn eine akute Kindeswohlgefährdung vorliegt. Unser Angebot richtet sich an Kinder von 0 bis 6 Jahren." },
      { frage: "Wie funktioniert eine Notaufnahme bei akuter Gefährdung?", antwort: "Unser Bereitschaftsdienst ist rund um die Uhr erreichbar. Bei akuter Kindeswohlgefährdung kann eine Aufnahme noch am selben Tag erfolgen. Das Jugendamt nimmt telefonisch Kontakt auf - wir melden uns innerhalb von 30 Minuten mit einer konkreten Rückmeldung." },
      { frage: "Werden die Eltern in den Prozess einbezogen?", antwort: "Ja - soweit dies dem Kindeswohl nicht entgegensteht. Wir führen strukturierte Elterngespräche, begleiten Besuchskontakte und arbeiten aktiv auf eine Rückführung hin, wenn die Voraussetzungen dafür gegeben sind. Eltern sind Partner im Hilfeprozess." },
      { frage: "Was unterscheidet Frühe Hilfen von einer regulären Pflegestelle?", antwort: "Unsere Schutzpflegestellen sind keine klassischen Pflegefamilien. Sie werden fachlich eng begleitet, sind speziell geschult und arbeiten mit therapeutischer Unterstützung. Entwicklungsdiagnostik, Bindungsarbeit und Elternarbeit sind fester Bestandteil - nicht optionale Ergänzung." },
      { frage: "Wie werden Entwicklungsfortschritte dokumentiert?", antwort: "Wir erstellen monatliche Entwicklungsberichte mit Bezug auf den individuellen Förderplan. Bei Hilfeplangesprächen übergeben wir strukturierte Einschätzungen zu Bindungsqualität, Entwicklungsstand und Förderfortschritten. Das Jugendamt erhält außerdem jederzeit auf Anfrage Rückmeldung." },
      { frage: "Bieten Sie auch ambulante Beratung für Kitas an?", antwort: "Ja. Unser Fachberatungsangebot für Kitas umfasst Fallberatung bei auffälligem Verhalten, Beratung bei Verdacht auf Kindeswohlgefährdung, kollegiale Fallbesprechung und Fortbildungen für Kita-Teams. Der Zugang ist niedrigschwellig und ohne formellen Hilfeauftrag möglich." },
      { frage: "Welche therapeutischen Verfahren kommen zum Einsatz?", antwort: "Wir arbeiten bindungsbasiert und traumasensibel. Eingesetzte Verfahren umfassen unter anderem Bindungsdiagnostik nach Ainsworth, Entwicklungspsychologische Beratung (EPB) nach Karl Heinz Brisch, spieltherapeutische Elemente sowie Eltern-Kind-Interaktionstherapie (PCIT) bei Bedarf." },
      { frage: "Wie lange dauert ein Frühe-Hilfen-Aufenthalt in der Regel?", antwort: "Das hängt stark vom Einzelfall ab. Kurzfristige Schutzmaßnahmen dauern wenige Wochen, längerfristige Begleitungen 6-18 Monate. Die Dauer wird gemeinsam mit dem Jugendamt und im Hilfeplan festgelegt - immer mit dem Ziel, eine nachhaltige Perspektive für das Kind zu entwickeln." },
    ],
    ctaH2: "Jedes Kind verdient den besten Start.",
    ctaP: "Stellen Sie eine Platzanfrage oder nehmen Sie direkt Kontakt auf. Wir melden uns innerhalb von 24 Stunden.",
    ctaPlatzBtn: "Platzanfrage stellen",
    ctaKontaktBtn: "Kontakt aufnehmen",
    seoFaqIntro: "Ankernetz bietet in Berlin Frühe Hilfen für Familien mit Kleinkindern von 0 bis 6 Jahren. Präventiv, niedrigschwellig und ohne Warteliste. Hier finden Eltern, Hebammen und Kitas Antworten auf die wichtigsten Fragen zu Frühen Hilfen in Berlin.",
  },
  en: {
    heroEyebrow: "Ankernetz Early Support",
    heroTitle1: "Protection from",
    heroTitle2: "the very start.",
    heroSub: "The first years of life determine everything. Our team protects and accompanies young children in particularly vulnerable situations — attachment-oriented, developmentally supportive, and to the highest professional standard.",
    heroPlatzBtn: "Request a placement",
    kennzahlen: [
      { wert: "0–6", label: "Years — the earliest and most vulnerable phase of life" },
      { wert: "24/7", label: "Emergency admission for acute child welfare concerns" },
      { wert: "100%", label: "Attachment-oriented approach in all areas" },
      { wert: "15+", label: "Years of experience working with very young children" },
    ],
    einlEyebrow: "What is early support?",
    einlH2: "The first years shape an entire lifetime.",
    einlP1: "Early support (Frühe Hilfen) is a specialised service within the child and youth welfare system that protects, promotes, and accompanies infants and toddlers in their first years of life. It comes into play when the family environment is unable to provide the necessary care.",
    einlP2: "Research is clear: what happens in a child's first 1,000 days lays the foundation for all further development — cognitively, emotionally, and socially. Early trauma, neglect, and lack of attachment leave traces that persist throughout life without professional intervention.",
    einlP3: "Our team combines attachment-based pedagogy, developmental psychology expertise, and intensive parent work — so that a difficult start can become a genuine opportunity.",
    checkItems: [
      "Attachment development as the central foundation",
      "Developmental psychology assessment and individual support plans",
      "24/7 emergency admission for acute child welfare concerns",
      "Structured parent work and return-home planning",
      "Close cooperation with the Youth Welfare Office and family court",
      "Medical care and therapeutic education support",
      "Specialist consultation for day-care centres",
      "Trauma-sensitive daily routines to scientific standards",
    ],
    warnEyebrow: "When we help",
    warnH2: "Indications for early support",
    warnSub: "Early support is activated when child welfare is at risk or the family system is unable to provide the necessary care.",
    warnsignale: [
      { titel: "Neglect", text: "Insufficient basic care, poor hygiene, malnutrition, inadequate medical attention." },
      { titel: "Child welfare risk", text: "Acute or latent endangerment situations requiring immediate protection and removal from the family environment." },
      { titel: "Developmental delays", text: "Language, motor, or cognitive delays attributable to insufficient stimulation or traumatic experiences." },
      { titel: "Highly stressed family systems", text: "Mental illness of caregivers, substance misuse, domestic violence, or homelessness as risk factors." },
      { titel: "Attachment disorders", text: "Clear signs of insecure or disorganised attachment patterns requiring professional attachment-based work." },
      { titel: "Newborns in endangered situations", text: "Infants whose parents are unable to provide necessary care — e.g. due to addiction or severe mental illness." },
    ],
    leistEyebrow: "Our range of services",
    leistH2: "What we provide for the youngest children",
    leistungen: [
      { titel: "Protective foster placements & small groups", text: "Admission to family-like protective placements or small groups of no more than 4 children. Close staffing ratios ensure individual attention around the clock." },
      { titel: "Attachment development & assessment", text: "Systematic evaluation of attachment quality using validated methods. Targeted promotion of secure attachment experiences as the basis for all further development." },
      { titel: "Developmental psychology support", text: "Individual support plans based on developmental assessment. Language, motor skills, cognition, and socio-emotional development are systematically supported." },
      { titel: "Medical & therapeutic education support", text: "Cooperation with paediatricians, speech therapy, occupational therapy, and physiotherapy. Comprehensive medical documentation and preventive check-ups." },
      { titel: "Parent work & return-home planning", text: "Structured parent work aimed at family reunification — where child welfare permits. Parents are accompanied, strengthened, and included in the support process." },
      { titel: "Day-care cooperation & educational support", text: "Close collaboration with day-care centres. Support during the transition to day care, support for childcare staff, transition planning." },
      { titel: "Trauma-sensitive daily routines", text: "Every aspect of daily life is shaped by trauma-pedagogical principles: reliability, predictability, sensitive responsiveness — as a daily language of safety." },
      { titel: "Specialist consultation for day-care centres", text: "External specialist advice for day-care teams regarding concerning behaviour, suspected child welfare risks, or questions about developmental support — low-threshold and practice-oriented." },
      { titel: "Documentation & Youth Welfare Office cooperation", text: "Detailed developmental reports, progress documentation, and assessments for the Youth Welfare Office. Regular care plan preparation and active participation in care planning meetings." },
    ],
    ansatzEyebrow: "Our approach",
    ansatzH2: "Attachment. Sensitivity. Protection.",
    ansatz: [
      { nr: "01", titel: "Attachment as the foundation", text: "All development is built on secure attachment. Our entire team is trained in attachment-based pedagogy — from first contact to handover." },
      { nr: "02", titel: "Sensitivity as an attitude", text: "We take the child's signals seriously and respond promptly, appropriately, and consistently. Sensitivity is not a technique — it is our fundamental attitude." },
      { nr: "03", titel: "Supporting development, not forcing it", text: "Every child has its own pace. We accompany, challenge, and support — always at the child's rhythm, not at the rhythm of institutions." },
      { nr: "04", titel: "Protection without exception", text: "Child welfare protection takes precedence above all else. Our professionals are trained in child protection and work according to clearly defined safeguarding concepts." },
      { nr: "05", titel: "Involving parents, not replacing them", text: "We are not an alternative to the family — we are supporters. Parents are involved wherever possible, strengthened, and prepared for reunification." },
      { nr: "06", titel: "Long-term perspective", text: "Early support is not a transitional solution. What develops in the first years of life has lifelong effects. We think in developmental years, not in support durations." },
    ],
    prozEyebrow: "Process",
    prozH2: "From referral to a long-term outlook",
    prozessSchritte: [
      { titel: "Referral & initial assessment", text: "The Youth Welfare Office or family court makes contact. Within 24 hours: first feedback on admission capacity and fit.", dauer: "Day 0" },
      { titel: "Admission", text: "Planned or emergency admission — coordinated according to urgency. Structured intake meeting with the Youth Welfare Office and — where possible — the parents.", dauer: "Day 1" },
      { titel: "Settling in & attachment development", text: "Careful first weeks with a clear key person. Focus on safety, orientation, and first trust-building.", dauer: "Weeks 1–4" },
      { titel: "Assessment & support planning", text: "Developmental psychology assessment, attachment diagnostics, and creation of an individual support plan — in coordination with the Youth Welfare Office.", dauer: "Months 1–2" },
      { titel: "Clarifying next steps", text: "Regular review meetings with the Youth Welfare Office and parents. Planning for next steps: family reunification, follow-up foster care, or another perspective.", dauer: "Ongoing" },
    ],
    zielEyebrow: "Target group",
    zielH2: "Who is early support designed for?",
    zielAlterLabel: "years",
    zielAlterText: "The most vulnerable phase of life. Everything that happens during these years durably influences physical, mental, and emotional development. Early protection is not the exception — it is the rule.",
    zielItems: [
      { label: "Infants & toddlers (0–3)", desc: "Highest protection needs, specially trained care staff, 24/7 supervision" },
      { label: "Pre-school children (3–6)", desc: "Developmental support, day-care integration, attachment work, and parent accompaniment" },
      { label: "Children from highly stressed families", desc: "Addiction, mental illness, poverty, domestic violence as risk factors" },
      { label: "Children in acute child welfare situations", desc: "Immediate protection, emergency admission, and structured assessment in a crisis context" },
    ],
    teamEyebrow: "Our team",
    teamH2: "Specialist professionals for early childhood",
    teamProfile: [
      { titel: "Infant and toddler educators", text: "Specialised in 0–3 year olds. Trained in attachment theory, Pikler pedagogy, and developmental support." },
      { titel: "Developmental psychologists", text: "Assessment using validated methods. Individual support plans based on scientific evidence." },
      { titel: "Attachment therapists", text: "Targeted therapeutic work for attachment disorders and early traumatisation." },
      { titel: "Medical professionals", text: "Cooperating paediatric team, midwives, and specialist physicians for comprehensive health care." },
      { titel: "Family & parent counsellors", text: "Supporting parents on the path to reunification or independent caregiving." },
      { titel: "Day-care specialist consultants", text: "External advisory support for day-care centres within the Ankernetz Early Support network." },
    ],
    fachEyebrow: "For Youth Welfare Offices & professionals",
    fachH2: "Your partner in early child protection",
    fachP: "Early support requires rapid response and close cooperation. We understand your requirements for documentation, transparency, and professional quality.",
    fachBtn: "Request a placement",
    fachItems: [
      "Direct access — emergency admissions also at night and on weekends",
      "Admission report within 48 hours of move-in",
      "Developmental psychology initial assessment after 4 weeks",
      "Monthly developmental reports including support progress",
      "Dedicated contact person for the entire duration of support",
      "Active participation in care planning meetings",
      "Structured parent work and return-home accompaniment",
      "Comprehensive GDPR-compliant documentation",
    ],
    faqEyebrow: "Frequently asked questions",
    faqH2: "What professionals and parents ask",
    faq: [
      { frage: "From what age do you accept children?", antwort: "We accept children from infant age — in exceptional cases also newborns directly after birth when there is an acute child welfare concern. Our service is designed for children aged 0 to 6." },
      { frage: "How does an emergency admission work for acute endangerment?", antwort: "Our on-call service is available around the clock. In cases of acute child welfare concern, admission can take place on the same day. The Youth Welfare Office contacts us by telephone — we respond within 30 minutes with concrete feedback." },
      { frage: "Are parents involved in the process?", antwort: "Yes — to the extent that this does not conflict with the child's best interests. We conduct structured parent sessions, support contact visits, and actively work towards family reunification when the conditions for this are met. Parents are partners in the support process." },
      { frage: "What distinguishes early support from a regular foster placement?", antwort: "Our protective placements are not conventional foster families. They receive close professional supervision, specialist training, and work with therapeutic support. Developmental assessment, attachment work, and parent work are integral components — not optional extras." },
      { frage: "How are developmental progress reports documented?", antwort: "We produce monthly developmental reports with reference to the individual support plan. At care planning meetings we provide structured assessments of attachment quality, developmental status, and support progress. The Youth Welfare Office can also request updates at any time." },
      { frage: "Do you also offer outpatient consultation for day-care centres?", antwort: "Yes. Our specialist consultation for day-care centres includes case consultation for concerning behaviour, advice on suspected child welfare concerns, collegial case discussion, and training for day-care teams. Access is low-threshold and does not require a formal service mandate." },
      { frage: "Which therapeutic methods are used?", antwort: "We work in an attachment-based and trauma-sensitive manner. Methods used include attachment assessment (Ainsworth), Developmental Psychology Counselling (EPB) following Karl Heinz Brisch, play-therapeutic elements, and Parent–Child Interaction Therapy (PCIT) where needed." },
      { frage: "How long does an early support placement typically last?", antwort: "This varies greatly by individual case. Short-term protective measures last a few weeks; longer-term accompaniment 6–18 months. Duration is determined together with the Youth Welfare Office and in the care plan — always with the aim of developing a sustainable long-term perspective for the child." },
    ],
    ctaH2: "Every child deserves the best possible start.",
    ctaP: "Submit a placement request or get in touch directly. We respond within 24 hours.",
    ctaPlatzBtn: "Request a placement",
    ctaKontaktBtn: "Get in touch",
    seoFaqIntro: "Ankernetz provides Early Support (Frühe Hilfen) in Berlin for families with young children from 0 to 6 years. Preventive, low-threshold, and without waiting lists. Here parents, midwives, and day-care centres find answers to the most important questions about early support in Berlin.",
  },
};

const KENN_ICONS = [Baby, Shield, Heart, Star];
const WARN_ICONS = [AlertTriangle, Shield, Brain, Home, Heart, Baby];
const WARN_AKZENT = ["#f97316", "#ef4444", "#8b5cf6", "#1a3f6f", "#e11d48", "#0891b2"];
const LEIST_ICONS = [Home, Heart, Brain, Stethoscope, Users, BookOpen, HandHeart, ClipboardList, FileText];
const ANSATZ_ICONS = [Heart, Eye, Sun, Shield, Users, TreePine];
const PROZ_ICONS = [Phone, Home, Heart, Brain, ArrowRight];
const ZIEL_ICONS = [Baby, Smile, Home, AlertTriangle];
const TEAM_ICONS = [Baby, Brain, Heart, Stethoscope, Users, BookOpen];
const FACH_ICONS = [Phone, FileText, Brain, ClipboardList, UserCheck, Users, Heart, Lock];

export default function FrueheHilfenPage() {
  const t = useT(TRANS);
  return (
    <main style={{ overflowX: "hidden", background: "#f4f7fb" }}>

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "5rem", paddingTop: "8rem", background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "15%", right: "5%", width: "500px", height: "500px", borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(111,163,254,0.1) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: "20%", left: "3%", width: "300px", height: "300px", borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(254,194,116,0.07) 0%, transparent 65%)" }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>{t.heroEyebrow}</p>
          <h1 style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.25rem", maxWidth: "14ch" }}>
            {t.heroTitle1}<br /><span style={{ color: "#6FA3FE" }}>{t.heroTitle2}</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: "540px", marginBottom: "3rem" }}>{t.heroSub}</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
            <Link href="/platzanfrage" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#6FA3FE", color: "white", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "12px", textDecoration: "none" }}>
              <Baby size={18} />{t.heroPlatzBtn}
            </Link>
            <a href="tel:+493022454322" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontWeight: 600, fontSize: "14px", padding: "14px 24px", borderRadius: "12px", textDecoration: "none" }}>
              <Phone size={16} />+49 30 22 45 43 22
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden" }}>
            {t.kennzahlen.map((k, idx) => {
              const Icon = KENN_ICONS[idx];
              return (
                <div key={idx} style={{ background: "rgba(255,255,255,0.04)", padding: "1.5rem 1.25rem" }}>
                  <Icon size={18} color="#6FA3FE" style={{ marginBottom: "10px" }} />
                  <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "white", lineHeight: 1 }}>{k.wert}</p>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "6px", lineHeight: 1.5 }}>{k.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ EINLEITUNG ════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>{t.einlEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>{t.einlH2}</h2>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>{t.einlP1}</p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>{t.einlP2}</p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>{t.einlP3}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {t.checkItems.map((text, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "1rem 1.25rem", background: i % 2 === 0 ? "#f4f7fb" : "white", borderRadius: "10px" }}>
                <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0, marginTop: "2px" }} />
                <p style={{ fontSize: "14px", color: "#1a3f6f", lineHeight: 1.55, fontWeight: 500 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WARNSIGNALE ═══════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem" }}>{t.warnEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1rem" }}>{t.warnH2}</h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "560px", margin: "0 auto", lineHeight: 1.75 }}>{t.warnSub}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {t.warnsignale.map((w, idx) => {
              const Icon = WARN_ICONS[idx];
              const akzent = WARN_AKZENT[idx];
              return (
                <div key={idx} className="bento-card" style={{ background: "white", borderRadius: "16px", padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: akzent + "15", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <Icon size={22} color={akzent} />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.5rem" }}>{w.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>{w.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ LEISTUNGEN ════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.leistEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: "520px" }}>{t.leistH2}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {t.leistungen.map((l, idx) => {
              const Icon = LEIST_ICONS[idx];
              return (
                <div key={idx} className="bento-card" style={{ background: "#f4f7fb", borderRadius: "16px", padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#1a3f6f", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <Icon size={20} color="white" />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.625rem" }}>{l.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.75 }}>{l.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ ANSATZ ════════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="site-container" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.75rem" }}>{t.ansatzEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "white", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t.ansatzH2}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {t.ansatz.map((a, idx) => {
              const Icon = ANSATZ_ICONS[idx];
              return (
                <div key={idx} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "2rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#6FA3FE", background: "rgba(111,163,254,0.15)", padding: "4px 10px", borderRadius: "8px", letterSpacing: "0.04em" }}>{a.nr}</span>
                    <Icon size={18} color="#6FA3FE" />
                  </div>
                  <p style={{ fontWeight: 700, color: "white", fontSize: "15px", marginBottom: "0.75rem" }}>{a.titel}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{a.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PROZESS ═══════════════════════════════════════════════ */}
      <section style={{ background: "#f4f7fb", padding: "5rem 0" }}>
        <div className="site-container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.prozEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t.prozH2}</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {t.prozessSchritte.map((s, i) => {
              const Icon = PROZ_ICONS[i];
              return (
                <div key={i} style={{ display: "flex", gap: "1.75rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#1a3f6f", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                      <Icon size={22} />
                    </div>
                    {i < t.prozessSchritte.length - 1 && (
                      <div style={{ width: "2px", flex: 1, background: "#dde4ee", minHeight: "40px", margin: "4px 0" }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: "2.5rem", paddingTop: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
                      <p style={{ fontWeight: 800, color: "#1a3f6f", fontSize: "16px" }}>{s.titel}</p>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#6FA3FE", background: "#eef4ff", padding: "3px 10px", borderRadius: "9999px", letterSpacing: "0.04em" }}>{s.dauer}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.75 }}>{s.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ ZIELGRUPPE ════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.zielEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t.zielH2}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ background: "#1a3f6f", borderRadius: "20px", padding: "2.5rem" }}>
              <p style={{ fontSize: "3.5rem", fontWeight: 900, color: "#6FA3FE", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.5rem" }}>0-6</p>
              <p style={{ fontWeight: 700, fontSize: "18px", color: "white", marginBottom: "1rem" }}>{t.zielAlterLabel}</p>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: "14px" }}>{t.zielAlterText}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {t.zielItems.map((item, idx) => {
                const Icon = ZIEL_ICONS[idx];
                return (
                  <div key={idx} style={{ background: "#f4f7fb", borderRadius: "12px", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start", border: "1px solid rgba(26,63,111,0.07)" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "9px", background: "#1a3f6f", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={16} color="white" />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "14px", marginBottom: "4px" }}>{item.label}</p>
                      <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TEAM ══════════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem" }}>{t.teamEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t.teamH2}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {t.teamProfile.map((tp, idx) => {
              const Icon = TEAM_ICONS[idx];
              return (
                <div key={idx} className="bento-card" style={{ background: "white", borderRadius: "16px", padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#eef4ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <Icon size={22} color="#1a3f6f" />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "14px", marginBottom: "0.5rem" }}>{tp.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>{tp.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FÜR FACHKRÄFTE ════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>{t.fachEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>{t.fachH2}</h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.85, marginBottom: "2rem" }}>{t.fachP}</p>
            <Link href="/platzanfrage" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#1a3f6f", color: "white", fontWeight: 700, fontSize: "14px", padding: "12px 22px", borderRadius: "10px", textDecoration: "none" }}>
              <ClipboardList size={16} />{t.fachBtn}
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {t.fachItems.map((text, i) => {
              const Icon = FACH_ICONS[i];
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", background: "#f4f7fb", borderRadius: "12px", border: "1px solid rgba(26,63,111,0.07)" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "9px", background: "#1a3f6f", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} color="white" />
                  </div>
                  <p style={{ fontSize: "13px", color: "#1a3f6f", fontWeight: 500, lineHeight: 1.55 }}>{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════ */}
      <section style={{ background: "#f4f7fb", padding: "5rem 0" }}>
        <div className="site-container" style={{ maxWidth: "760px" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.faqEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t.faqH2}</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {t.faq.map((f, i) => (
              <details key={i} style={{ background: "white", borderRadius: "12px", overflow: "hidden" }}>
                <summary style={{ padding: "1.25rem 1.5rem", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 700, color: "#1a3f6f", fontSize: "14px", lineHeight: 1.45 }}>
                  {f.frage}
                  <ChevronDown size={16} color="#6FA3FE" style={{ flexShrink: 0, marginLeft: "1rem" }} />
                </summary>
                <div style={{ padding: "0 1.5rem 1.25rem", fontSize: "13px", color: "#374151", lineHeight: 1.8 }}>{f.antwort}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)", padding: "6rem 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="site-container" style={{ position: "relative", maxWidth: "640px" }}>
          <Baby size={36} color="#6FA3FE" style={{ marginBottom: "1.5rem" }} />
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "white", marginBottom: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{t.ctaH2}</h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", marginBottom: "2.5rem", lineHeight: 1.75 }}>{t.ctaP}</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/platzanfrage" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#6FA3FE", color: "white", fontWeight: 700, fontSize: "15px", padding: "15px 30px", borderRadius: "12px", textDecoration: "none" }}>
              <Baby size={18} />{t.ctaPlatzBtn}
            </Link>
            <a href="tel:+493022454322" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontWeight: 600, fontSize: "14px", padding: "15px 26px", borderRadius: "12px", textDecoration: "none" }}>
              <Phone size={16} />+49 30 22 45 43 22
            </a>
            <Link href="/kontakt" style={{ display: "inline-flex", alignItems: "center", color: "rgba(255,255,255,0.55)", fontWeight: 500, fontSize: "14px", padding: "15px 20px", textDecoration: "none" }}>
              {t.ctaKontaktBtn}
            </Link>
          </div>
        </div>
      </section>

      <SeoFaqSchema items={TRANS.de.faq.map(f => ({ q: f.frage, a: f.antwort }))} />
      <SeoBreadcrumb crumbs={[{ name: "Frühe Hilfen", slug: "fruehe-hilfen" }]} />
    </main>
  );
}

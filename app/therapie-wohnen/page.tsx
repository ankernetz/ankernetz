"use client";

import Link from "next/link";
import {
  Phone, Heart, Shield, Brain, Clock,
  CheckCircle, ArrowRight, Users, FileText,
  Home, Stethoscope,
  AlertTriangle, UserCheck, ClipboardList,
  ChevronDown, Lock, Activity,
  Sun, Target, Layers,
  Coffee, Music, Compass, GraduationCap,
} from "lucide-react";

import { SeoFaqSchema } from "../components/SeoFaqSchema";
import { SeoBreadcrumb } from "../components/SeoBreadcrumb";
import { useT } from "../i18n/useT";

/* ─── Icon arrays (outside TRANS) ───────────────────────────── */

const KENN_ICONS = [Users, Clock, Target, Home];

const INDI_ICONS = [Brain, AlertTriangle, Activity, Home, Shield, Compass];
const INDI_AKZENT = ["#8b5cf6", "#ef4444", "#f97316", "#1a3f6f", "#0891b2", "#059669"];

const LEIST_ICONS = [Home, Heart, Brain, Shield, GraduationCap, Users, Music, Coffee, Stethoscope];

const PROZ_ICONS = [ClipboardList, Home, Heart, Brain, Activity, ArrowRight];

const ANSATZ_ICONS = [Home, Heart, Brain, Target, Layers, Sun];

const FACH_ICONS = [Phone, FileText, ClipboardList, UserCheck, Brain, Users, Shield, Lock];

/* ─── Translations ───────────────────────────────────────────── */

const TRANS = {
  de: {
    heroBadge: "Ankernetz Therapie & Wohnen",
    heroTitle1: "Raum zum Ankommen.",
    heroTitle2: "Begleitung zum Wachsen.",
    heroP: "Unsere therapeutischen Wohngruppen bieten Jugendlichen den Rahmen, den sie brauchen: therapeutisch begleitet, alltagsnah und mit echter Beziehung als Fundament. Veränderung entsteht im echten Leben - nicht im Behandlungszimmer.",
    heroPlatzBtn: "Platzanfrage stellen",
    kennzahlen: [
      { wert: "12-17", label: "Jahre - Jugendliche in besonders kritischer Entwicklungsphase" },
      { wert: "24/7", label: "Bezugsbetreuung und Krisenbegleitung im Alltag" },
      { wert: "Ø 18", label: "Monate therapeutische Begleitung pro Jugendlichem" },
      { wert: "klein", label: "Wohngruppen mit 4-6 Jugendlichen - Qualität vor Quantität" },
    ],
    einlEyebrow: "Was ist Therapie & Wohnen?",
    einlH2: "Therapie, die im Alltag stattfindet.",
    einlP1: "Therapeutische Wohngruppen verbinden das Beste aus zwei Welten: den strukturierten Schutzrahmen der stationären Jugendhilfe mit der Tiefe therapeutischer Arbeit. Jugendliche leben hier nicht neben ihrer Therapie - sie leben in ihr.",
    einlP2: "Jeder gemeinsame Abend, jedes gelöste Konfliktgespräch, jeder überwundene schwierige Morgen ist therapeutisch wirksam - weil echte Beziehung der stärkste Wirkfaktor ist, den die Forschung kennt.",
    einlP3: "Unser Team aus Therapeuten, Pädagogen und Bezugsbetreuern arbeitet nach einem gemeinsamen Verständnis: traumasensibel, ressourcenorientiert und immer mit dem Jugendlichen - nicht über seinen Kopf hinweg.",
    checkItems: [
      "Kleines Gruppenformat: 4-6 Jugendliche pro Gruppe",
      "Approbierte Therapeuten als festes Teammitglied",
      "Wöchentliche Einzel- und Gruppentherapie",
      "24/7 Betreuung durch Bezugsfachkräfte",
      "Traumasensible Alltagsgestaltung nach Konzept",
      "Schulbegleitung und individuelle Bildungsförderung",
      "Aktive Eltern- und Familienarbeit",
      "Vorbereitung auf Verselbständigung von Anfang an",
    ],
    indiEyebrow: "Wann wir helfen",
    indiH2: "Indikationen für Therapie & Wohnen",
    indiSub: "Therapie & Wohnen ist die richtige Hilfe, wenn ambulante Maßnahmen nicht mehr ausreichen und ein stabiler therapeutischer Lebensrahmen gebraucht wird.",
    indikationen: [
      { titel: "Komplexe Trauma-Folgestörungen", text: "Jugendliche mit PTBS, komplexen Traumatisierungen durch Misshandlung, Vernachlässigung oder wiederholte Gewalterfahrungen, die ambulante Hilfen überschreiten." },
      { titel: "Psychische Erkrankungen", text: "Depressionen, Angststörungen, Persönlichkeitsentwicklungsstörungen oder andere psychiatrische Diagnosen, die eine therapeutisch gestützte Wohnumgebung erfordern." },
      { titel: "Verhaltensauffälligkeiten", text: "Externalisierendes Verhalten, Schulverweigerung, selbstverletzendes Verhalten, dissoziales Auftreten - wenn herkömmliche Hilfen nicht mehr greifen." },
      { titel: "Schwerwiegende familiäre Belastungen", text: "Zerbrochene Familiensysteme, elterliche Erkrankungen, Sucht, Gewalt oder Vernachlässigung als Ursache des Hilfebedarfs." },
      { titel: "Gescheiterte Vorgängerhilfen", text: "Jugendliche, die in anderen Einrichtungen, Pflegefamilien oder Wohngruppen nicht gehalten werden konnten und eine intensivere, therapeutischere Umgebung benötigen." },
      { titel: "Übergang Klinik → Jugendhilfe", text: "Nach stationär-psychiatrischen Aufenthalten als stabilisierende Anschlussversorgung - strukturiert, therapeutisch begleitet und alltagsnah." },
    ],
    leistEyebrow: "Unser Leistungsangebot",
    leistH2: "Was wir für Jugendliche leisten",
    leistungen: [
      { titel: "Therapeutisch geleitete Wohngruppe", text: "Kleine Gruppen mit 4-6 Jugendlichen. Klarer Strukturrahmen, verlässliche Bezugspersonen und ein therapeutisch gestalteter Alltag als Grundlage jeder Veränderung." },
      { titel: "Intensive Bezugsbetreuung", text: "Jeder Jugendliche hat eine feste Bezugsfachkraft, die ihn durch den gesamten Hilfeprozess begleitet. Kontinuität als therapeutisches Kernelement." },
      { titel: "Einzel- und Gruppentherapie", text: "Wöchentliche Einzeltherapie mit ausgebildeten Therapeuten. Ergänzt durch Gruppentherapieangebote zu Themen wie Emotionsregulation, soziale Kompetenz und Traumaverarbeitung." },
      { titel: "Traumasensible Alltagsgestaltung", text: "Der gesamte Alltag - von der Morgenroutine bis zum Abendgespräch - wird nach traumapädagogischen Prinzipien gestaltet: Vorhersehbarkeit, Verlässlichkeit, Sicherheit." },
      { titel: "Schulbegleitung & Bildungsförderung", text: "Enge Kooperation mit Schulen, individuelle Lernbegleitung und Förderung. Schulische Entwicklung als Teil des Gesamthilfeplans." },
      { titel: "Familienarbeit & Elterngespräche", text: "Eltern sind kein Gegenüber - sie sind Teil des Hilfesystems. Wir führen regelmäßige Familiengespräche, begleiten Besuchskontakte und arbeiten an Beziehungsklärung." },
      { titel: "Freizeitpädagogik & Erlebnisangebote", text: "Gemeinsame Aktivitäten, Sport, kreative Angebote und Ausflüge - Freizeit als Raum für soziales Lernen, Selbstvertrauen und positive Erfahrungen." },
      { titel: "Alltagskompetenz & Verselbständigung", text: "Kochen, Haushalt, Finanzen, Behördengänge - gezielte Vorbereitung auf ein eigenständiges Leben als Teil jeder Hilfeplanung." },
      { titel: "Psychiatrische Kooperation & Medikation", text: "Enge Zusammenarbeit mit kooperierenden Kinder- und Jugendpsychiatern. Medikamentöse Behandlung wird wenn möglich ambulant koordiniert." },
    ],
    tagEyebrow: "Einblick",
    tagH2: "Ein Tag in der therapeutischen Wohngruppe",
    tagSub: "Struktur gibt Sicherheit. Sicherheit ermöglicht Entwicklung.",
    therapeutischerAlltag: [
      { zeit: "07:00", titel: "Strukturierter Morgen", text: "Gemeinsames Frühstück, Morgenrunde, Tagesplanung - Rhythmus als therapeutisches Mittel." },
      { zeit: "08:30", titel: "Schule & Bildung", text: "Begleiteter Schulbesuch oder schulische Förderung im Haus - abgestimmt auf den Entwicklungsstand." },
      { zeit: "14:00", titel: "Therapiezeiten", text: "Einzel- oder Gruppentherapie, Skill-Training, kreative Angebote - therapeutische Arbeit im Alltag." },
      { zeit: "16:00", titel: "Freizeit & Gemeinschaft", text: "Sport, Kochen, Aktivitäten, Einzelgespräche - Beziehung entsteht im gemeinsamen Tun." },
      { zeit: "18:30", titel: "Abend & Rückblick", text: "Gemeinsames Abendessen, Tagesrückblick, Bezugspersonengespräch - der Abend als Ankerpunkt." },
      { zeit: "21:00", titel: "Sicherheit in der Nacht", text: "Bereitschaftsdienst im Haus. Kein Jugendlicher ist allein - auch nicht um Mitternacht." },
    ],
    ansatzEyebrow: "Unser Ansatz",
    ansatzH2: "Alltag. Beziehung. Veränderung.",
    ansatz: [
      { titel: "Alltag als Therapie", text: "Veränderung entsteht nicht im Behandlungszimmer - sie entsteht im echten Leben. Jeder gemeinsame Mahlzeit, jede Konfliktlösung, jeder Erfolg ist Teil der therapeutischen Arbeit." },
      { titel: "Beziehung als Wirkfaktor", text: "Forschungskonsens: Der stärkste Prädiktor für therapeutischen Erfolg ist die Beziehungsqualität. Wir investieren alles in verlässliche, authentische Beziehungen." },
      { titel: "Traumasensible Grundhaltung", text: "Verhaltensauffälligkeiten sind Überlebensstrategien, keine Charakterfehler. Wir verstehen bevor wir handeln - und handeln immer auf Basis von Sicherheit." },
      { titel: "Klare Ziele, messbare Schritte", text: "Jeder Hilfeplan enthält konkrete, erreichbare Ziele. Wir überprüfen regelmäßig, passen an und feiern Fortschritte - auch die kleinen." },
      { titel: "Systemisch denken", text: "Der Jugendliche ist nicht das Problem - er ist Teil eines Systems. Wir arbeiten mit Familie, Schule, Jugendamt und psychiatrischen Partnern als Team." },
      { titel: "Ressourcen stärken", text: "Defizitorientierung schwächt. Wir sehen, was da ist: Stärken, Interessen, Überlebensmut. Diese Ressourcen sind der Motor jeder Veränderung." },
    ],
    prozEyebrow: "Ablauf",
    prozH2: "Von der Anfrage zur Perspektive",
    prozessSchritte: [
      { nr: "01", titel: "Platzanfrage", text: "Das Jugendamt stellt eine Anfrage mit relevanten Unterlagen. Wir prüfen die Passung und melden uns innerhalb von 48 Stunden zurück.", dauer: "Tag 0-2" },
      { nr: "02", titel: "Schnupperwohnen", text: "Ein bis drei Tage Kennenlernen der Gruppe, des Teams und des Alltags. Der Jugendliche entscheidet mit - kein Einzug ohne Zustimmung.", dauer: "Woche 1" },
      { nr: "03", titel: "Einzug & Eingewöhnung", text: "Strukturierter Einzug mit individuellem Eingewöhnungsplan. Bezugsperson ab dem ersten Tag. Fokus auf Ankommen und Sicherheit.", dauer: "Woche 1-4" },
      { nr: "04", titel: "Diagnostik & Hilfeplanung", text: "Therapeutische Diagnostik, Erstellung eines individuellen Behandlungsplans und gemeinsame Zielformulierung im Hilfeplan mit Jugendamt und Familie.", dauer: "Monat 1-2" },
      { nr: "05", titel: "Therapeutische Arbeit", text: "Intensive Begleitungsphase: Therapie, Schulbegleitung, Familienarbeit, Krisenmanagement - und messbare Fortschritte.", dauer: "Laufend" },
      { nr: "06", titel: "Perspektive & Übergang", text: "Vorbereitung auf Rückführung, Verselbständigung oder ambulante Nachbetreuung. Wir begleiten den Übergang aktiv - kein abruptes Ende.", dauer: "Ab Monat 12" },
    ],
    fachEyebrow: "Für Jugendämter & Fachkräfte",
    fachH2: "Ihr verlässlicher Partner in der Hilfeplanung",
    fachP: "Therapeutisches Wohnen erfordert enge Kooperation. Wir sind transparent, gut erreichbar und liefern Ihnen die Dokumentation, die Sie brauchen.",
    fachPlatzBtn: "Platzanfrage stellen",
    fachItems: [
      "Direkte Erreichbarkeit der Gruppenleitung - täglich",
      "Aufnahmebericht innerhalb von 72h",
      "Monatliche Entwicklungsberichte mit Therapiefortschritten",
      "Fester Ansprechpartner für die gesamte Hilfedauer",
      "Therapeutische Einschätzungen zur Hilfeplanvorbereitung",
      "Aktive Teilnahme an Hilfeplangesprächen und Familienmeetings",
      "Klares Krisenprotokoll mit direkter Rückmeldung",
      "Vollständige Dokumentation nach §34 SGB VIII und DSGVO",
    ],
    faqEyebrow: "Häufige Fragen",
    faqH2: "Was Jugendämter & Familien fragen",
    faq: [
      { frage: "Wie lange dauert ein Aufenthalt in einer therapeutischen Wohngruppe?", antwort: "Im Durchschnitt 12-24 Monate. Die genaue Dauer richtet sich nach dem individuellen Hilfebedarf und wird gemeinsam mit dem Jugendamt im Hilfeplan festgelegt. Wir planen nicht auf Zeit - wir planen auf Ziele." },
      { frage: "Was unterscheidet eine therapeutische Wohngruppe von einer regulären Heimgruppe?", antwort: "Therapeutische Wohngruppen haben einen deutlich höheren Betreuungsschlüssel, ausgebildete Therapeuten als festen Teil des Teams, eine traumasensible Konzeption des gesamten Alltags und eine engere psychiatrische Anbindung. Der therapeutische Auftrag ist nicht Ergänzung - er ist Kern." },
      { frage: "Welche Störungsbilder können Sie begleiten?", antwort: "Wir begleiten Jugendliche mit PTBS, komplexen Traumatisierungen, Depressionen, Angststörungen, Persönlichkeitsentwicklungsstörungen, ADHS mit Komorbiditäten, selbstverletzendem Verhalten und externalisierenden Störungsbildern. Ausschlusskriterien sind akute Psychosen oder stark fremdgefährdendes Verhalten - hier vermitteln wir in geeignetere Einrichtungen." },
      { frage: "Gibt es Therapie durch ausgebildete Therapeuten oder durch Pädagogen?", antwort: "Wir haben approbierte Kinder- und Jugendlichenpsychotherapeuten als festes Teammitglied. Diese führen die Einzeltherapie durch. Gruppentherapeutische Angebote werden von therapeutisch ausgebildeten Pädagogen begleitet. Beides ergänzt sich." },
      { frage: "Wie werden Eltern in den Prozess einbezogen?", antwort: "Eltern sind fester Bestandteil des Hilfeprozesses. Wir führen regelmäßige Eltern- und Familiengespräche, begleiten Besuchskontakte und arbeiten aktiv an Beziehungsklärung. Ziel ist immer die bestmögliche Perspektive für den Jugendlichen - ob das Rückführung, Verselbständigung oder eine andere Lösung ist." },
      { frage: "Was passiert in einer Krise innerhalb der Gruppe?", antwort: "Unser Team ist 24/7 im Haus. Bei Krisen greift ein klares Krisenprotokoll: De-Eskalation, Einzelbetreuung, Sicherung. Bei psychiatrischen Notfällen kooperieren wir direkt mit unseren psychiatrischen Partnern. Fremdgefährdende Krisen werden mit dem Jugendamt abgestimmt." },
      { frage: "Wie läuft das Schnupperwohnen ab?", antwort: "Vor dem offiziellen Einzug verbringt der Jugendliche 1-3 Tage in der Gruppe: Kennenlernen des Teams, der Mitbewohner, der Räume und des Alltags. Kein Einzug ohne ein Gespräch mit dem Jugendlichen selbst. Seine Zustimmung ist für uns entscheidend." },
      { frage: "Welche Schulmodelle gibt es?", antwort: "Wir kooperieren mit umliegenden Schulen aller Schulformen und bieten schulische Förderung im Haus an. Bei Schulverweigerung oder nach längeren Fehlzeiten gibt es ein abgestuftes Wiedereingliederungsmodell - angepasst an den individuellen Stand des Jugendlichen." },
    ],
    ctaH2: "Ein Platz, der wirklich passt.",
    ctaP: "Stellen Sie eine Platzanfrage oder rufen Sie uns direkt an. Wir prüfen die Passung und melden uns innerhalb von 48 Stunden.",
    ctaPlatzBtn: "Platzanfrage stellen",
    ctaKontaktBtn: "Kontakt aufnehmen",
    seoFaqIntro: "Ankernetz betreibt in Berlin therapeutische Wohngruppen für Jugendliche von 12 bis 17 Jahren mit besonderem Unterstützungsbedarf. Intensiv, traumasensibel, mit eigenem Kassensitz-Psychotherapeuten. Antworten auf häufige Fragen von Jugendämtern und Eltern.",
  },
  en: {
    heroBadge: "Ankernetz Therapeutic Living",
    heroTitle1: "A place to arrive.",
    heroTitle2: "Support to grow.",
    heroP: "Our therapeutic residential groups provide young people with the framework they need: therapeutically guided, grounded in daily life, and built on genuine relationships. Change happens in real life — not in a treatment room.",
    heroPlatzBtn: "Request a placement",
    kennzahlen: [
      { wert: "12-17", label: "Years — young people in a critical developmental phase" },
      { wert: "24/7", label: "Key worker support and crisis accompaniment" },
      { wert: "Ø 18", label: "Months of therapeutic support per young person" },
      { wert: "Small", label: "Groups of 4-6 young people — quality over quantity" },
    ],
    einlEyebrow: "What is Therapeutic Living?",
    einlH2: "Therapy that takes place in everyday life.",
    einlP1: "Therapeutic residential groups combine the best of two worlds: the structured protective framework of residential youth care with the depth of therapeutic work. Young people here do not live alongside their therapy — they live within it.",
    einlP2: "Every shared evening, every resolved conflict, every difficult morning overcome has therapeutic impact — because genuine relationships are the strongest predictor of change that research knows.",
    einlP3: "Our team of therapists, educators, and key workers operates from a shared understanding: trauma-sensitive, resource-oriented, and always with the young person — never over their head.",
    checkItems: [
      "Small group format: 4-6 young people per group",
      "Licensed therapists as permanent team members",
      "Weekly individual and group therapy",
      "24/7 care by dedicated key workers",
      "Trauma-sensitive daily routine by concept",
      "School accompaniment and individual educational support",
      "Active family and parent work",
      "Preparation for independent living from day one",
    ],
    indiEyebrow: "When we help",
    indiH2: "Indications for Therapeutic Living",
    indiSub: "Therapeutic Living is the right support when outpatient measures are no longer sufficient and a stable therapeutic living framework is needed.",
    indikationen: [
      { titel: "Complex Trauma-Related Disorders", text: "Young people with PTSD, complex trauma from abuse, neglect or repeated exposure to violence, where outpatient support is no longer sufficient." },
      { titel: "Mental Health Conditions", text: "Depression, anxiety disorders, personality development disorders or other psychiatric diagnoses requiring a therapeutically supported living environment." },
      { titel: "Behavioural Difficulties", text: "Externalising behaviour, school refusal, self-harm, antisocial conduct — when conventional support no longer works." },
      { titel: "Severe Family Stressors", text: "Broken family systems, parental illness, addiction, violence or neglect as the cause of the need for support." },
      { titel: "Failed Previous Placements", text: "Young people who could not be sustained in other facilities, foster families or residential groups and who need a more intensive, therapeutic environment." },
      { titel: "Transition: Clinic → Youth Care", text: "After inpatient psychiatric stays, as stabilising follow-up care — structured, therapeutically guided, and embedded in everyday life." },
    ],
    leistEyebrow: "Our services",
    leistH2: "What we provide for young people",
    leistungen: [
      { titel: "Therapeutically Led Residential Group", text: "Small groups of 4-6 young people. A clear structural framework, reliable key figures, and a therapeutically shaped daily life as the foundation for any change." },
      { titel: "Intensive Key Worker Support", text: "Every young person has a dedicated key worker who accompanies them throughout the entire support process. Continuity as a core therapeutic element." },
      { titel: "Individual and Group Therapy", text: "Weekly individual therapy with qualified therapists. Complemented by group therapy on topics such as emotion regulation, social competence, and trauma processing." },
      { titel: "Trauma-Sensitive Daily Structure", text: "The entire day — from morning routine to evening conversation — is shaped by trauma-pedagogical principles: predictability, reliability, safety." },
      { titel: "School Accompaniment & Educational Support", text: "Close cooperation with schools, individual learning support and tutoring. Educational development as part of the overall care plan." },
      { titel: "Family Work & Parent Consultations", text: "Parents are not the opposition — they are part of the support system. We hold regular family sessions, support contact visits, and work on relationship clarification." },
      { titel: "Leisure Education & Activities", text: "Shared activities, sport, creative offerings and outings — leisure as a space for social learning, self-confidence, and positive experiences." },
      { titel: "Life Skills & Independent Living", text: "Cooking, household management, finances, official appointments — targeted preparation for an independent life as part of every care plan." },
      { titel: "Psychiatric Cooperation & Medication", text: "Close collaboration with cooperating child and adolescent psychiatrists. Medication management is coordinated on an outpatient basis wherever possible." },
    ],
    tagEyebrow: "A glimpse inside",
    tagH2: "A day in the therapeutic residential group",
    tagSub: "Structure provides safety. Safety enables development.",
    therapeutischerAlltag: [
      { zeit: "07:00", titel: "Structured morning", text: "Shared breakfast, morning round, daily planning — rhythm as a therapeutic tool." },
      { zeit: "08:30", titel: "School & education", text: "Accompanied school attendance or in-house educational support — tailored to each young person's developmental stage." },
      { zeit: "14:00", titel: "Therapy time", text: "Individual or group therapy, skills training, creative offerings — therapeutic work embedded in daily life." },
      { zeit: "16:00", titel: "Leisure & community", text: "Sport, cooking, activities, one-to-one conversations — relationships form through doing things together." },
      { zeit: "18:30", titel: "Evening & reflection", text: "Shared dinner, daily review, key worker conversation — the evening as an anchor point." },
      { zeit: "21:00", titel: "Safety at night", text: "On-call staff in the house. No young person is alone — not even at midnight." },
    ],
    ansatzEyebrow: "Our approach",
    ansatzH2: "Daily life. Relationships. Change.",
    ansatz: [
      { titel: "Everyday life as therapy", text: "Change does not happen in the treatment room — it happens in real life. Every shared meal, every resolved conflict, every achievement is part of the therapeutic work." },
      { titel: "Relationship as the active ingredient", text: "Research consensus: the strongest predictor of therapeutic success is relationship quality. We invest everything in reliable, authentic relationships." },
      { titel: "Trauma-sensitive stance", text: "Behavioural difficulties are survival strategies, not character flaws. We understand before we act — and always act from a basis of safety." },
      { titel: "Clear goals, measurable steps", text: "Every care plan contains concrete, achievable goals. We review regularly, adapt, and celebrate progress — including the small ones." },
      { titel: "Systemic thinking", text: "The young person is not the problem — they are part of a system. We work with family, school, Youth Welfare Office, and psychiatric partners as a team." },
      { titel: "Building on strengths", text: "A deficit focus weakens. We see what is there: strengths, interests, the courage to survive. These resources are the engine of every change." },
    ],
    prozEyebrow: "Process",
    prozH2: "From enquiry to perspective",
    prozessSchritte: [
      { nr: "01", titel: "Placement request", text: "The Youth Welfare Office submits a request with relevant documents. We assess suitability and respond within 48 hours.", dauer: "Day 0-2" },
      { nr: "02", titel: "Trial stay", text: "One to three days getting to know the group, the team, and daily life. The young person has a say — no move-in without their consent.", dauer: "Week 1" },
      { nr: "03", titel: "Move-in & settling in", text: "Structured move-in with an individual settling-in plan. Key worker assigned from day one. Focus on arriving and feeling safe.", dauer: "Week 1-4" },
      { nr: "04", titel: "Assessment & care planning", text: "Therapeutic assessment, development of an individual treatment plan, and joint goal-setting within the care plan with the Youth Welfare Office and family.", dauer: "Month 1-2" },
      { nr: "05", titel: "Therapeutic work", text: "Intensive support phase: therapy, school accompaniment, family work, crisis management — and measurable progress.", dauer: "Ongoing" },
      { nr: "06", titel: "Perspective & transition", text: "Preparation for return home, independent living, or outpatient aftercare. We actively support the transition — no abrupt ending.", dauer: "From month 12" },
    ],
    fachEyebrow: "For Youth Welfare Offices & professionals",
    fachH2: "Your reliable partner in care planning",
    fachP: "Therapeutic living requires close cooperation. We are transparent, accessible, and deliver the documentation you need.",
    fachPlatzBtn: "Request a placement",
    fachItems: [
      "Direct access to group leadership — daily",
      "Admission report within 72 hours",
      "Monthly progress reports including therapeutic developments",
      "Dedicated contact person for the entire duration of care",
      "Therapeutic assessments for care planning preparation",
      "Active participation in care planning meetings and family meetings",
      "Clear crisis protocol with direct feedback",
      "Full documentation in compliance with §34 SGB VIII and GDPR",
    ],
    faqEyebrow: "Frequently asked questions",
    faqH2: "What Youth Welfare Offices & families ask",
    faq: [
      { frage: "How long does a stay in a therapeutic residential group last?", antwort: "On average 12–24 months. The exact duration depends on individual support needs and is agreed with the Youth Welfare Office within the care plan. We plan towards goals — not towards time." },
      { frage: "What distinguishes a therapeutic residential group from a regular residential home?", antwort: "Therapeutic residential groups have a significantly higher staffing ratio, qualified therapists as permanent team members, a trauma-sensitive design of daily life, and closer psychiatric support. The therapeutic mandate is not an add-on — it is the core." },
      { frage: "What types of conditions can you support?", antwort: "We support young people with PTSD, complex trauma, depression, anxiety disorders, personality development disorders, ADHD with comorbidities, self-harming behaviour, and externalising conditions. Exclusion criteria are acute psychosis or strongly other-endangering behaviour — in these cases we help find a more suitable placement." },
      { frage: "Is therapy provided by qualified therapists or by educators?", antwort: "We have licensed child and adolescent psychotherapists as permanent team members. They conduct individual therapy. Group therapeutic sessions are facilitated by therapeutically trained educators. Both complement each other." },
      { frage: "How are parents involved in the process?", antwort: "Parents are a permanent part of the support process. We hold regular parent and family sessions, support contact visits, and actively work on relationship clarification. The goal is always the best possible perspective for the young person — whether that is returning home, independent living, or another solution." },
      { frage: "What happens during a crisis within the group?", antwort: "Our team is in the house 24/7. In a crisis, a clear protocol is activated: de-escalation, individual support, safety. For psychiatric emergencies we cooperate directly with our psychiatric partners. Situations involving risk to others are coordinated with the Youth Welfare Office." },
      { frage: "How does the trial stay work?", antwort: "Before the official move-in, the young person spends 1–3 days in the group: getting to know the team, fellow residents, the rooms, and daily life. No move-in without a conversation with the young person themselves. Their consent is essential for us." },
      { frage: "What school arrangements are in place?", antwort: "We cooperate with local schools across all school types and offer in-house educational support. In cases of school refusal or after extended absences, there is a graduated reintegration model — tailored to the individual young person's current situation." },
    ],
    ctaH2: "A place that truly fits.",
    ctaP: "Submit a placement request or call us directly. We assess suitability and respond within 48 hours.",
    ctaPlatzBtn: "Request a placement",
    ctaKontaktBtn: "Get in touch",
    seoFaqIntro: "Ankernetz operates therapeutic residential groups in Berlin for young people aged 12 to 17 with particular support needs. Intensive, trauma-sensitive, with our own insurance-approved psychotherapist. Answers to frequently asked questions from Youth Welfare Offices and families.",
  },
};

/* ─── Seite ─────────────────────────────────────────────────── */

export default function TherapieWohnenPage() {
  const t = useT(TRANS);

  return (
    <main style={{ overflowX: "hidden", background: "#f4f7fb" }}>

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: "5rem",
        paddingTop: "8rem",
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div style={{
          position: "absolute", top: "15%", right: "5%",
          width: "500px", height: "500px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(111,163,254,0.1) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "20%", left: "3%",
          width: "320px", height: "320px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(254,194,116,0.06) 0%, transparent 65%)",
        }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
            marginBottom: "1.25rem",
          }}>
            {t.heroBadge}
          </p>

          <h1 style={{
            fontSize: "clamp(2.75rem, 6vw, 5rem)", fontWeight: 900,
            color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: "1.25rem", maxWidth: "16ch",
          }}>
            {t.heroTitle1}<br />
            <span style={{ color: "#6FA3FE" }}>{t.heroTitle2}</span>
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75, maxWidth: "560px", marginBottom: "3rem",
          }}>
            {t.heroP}
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#6FA3FE", color: "white",
              fontWeight: 700, fontSize: "15px",
              padding: "14px 28px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              <ClipboardList size={18} />
              {t.heroPlatzBtn}
            </Link>
            <a href="tel:+493022454322" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white", fontWeight: 600, fontSize: "14px",
              padding: "14px 24px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              <Phone size={16} />
              +49 30 22 45 43 22
            </a>
          </div>

          {/* Kennzahlen */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px", background: "rgba(255,255,255,0.08)",
            borderRadius: "16px", overflow: "hidden",
          }}>
            {t.kennzahlen.map((k, i) => {
              const Icon = KENN_ICONS[i];
              return (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.04)",
                  padding: "1.5rem 1.25rem",
                }}>
                  <Icon size={18} color="#6FA3FE" style={{ marginBottom: "10px" }} />
                  <p style={{ fontSize: "1.625rem", fontWeight: 900, color: "white", lineHeight: 1 }}>{k.wert}</p>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "6px", lineHeight: 1.5 }}>{k.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ EINLEITUNG ════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center",
        }}>
          <div>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem",
            }}>
              {t.einlEyebrow}
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}>
              {t.einlH2}
            </h2>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              {t.einlP1}
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              {t.einlP2}
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>
              {t.einlP3}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {t.checkItems.map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "12px",
                padding: "1rem 1.25rem", background: i % 2 === 0 ? "#f4f7fb" : "white",
                borderRadius: "10px",
              }}>
                <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0, marginTop: "2px" }} />
                <p style={{ fontSize: "14px", color: "#1a3f6f", lineHeight: 1.55, fontWeight: 500 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDIKATIONEN ══════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem",
            }}>
              {t.indiEyebrow}
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}>
              {t.indiH2}
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75 }}>
              {t.indiSub}
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}>
            {t.indikationen.map((ind, i) => {
              const Icon = INDI_ICONS[i];
              const akzent = INDI_AKZENT[i];
              return (
                <div key={i} className="bento-card" style={{
                  background: "white", borderRadius: "16px",
                  padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: akzent + "15",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1rem",
                  }}>
                    <Icon size={22} color={akzent} />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.5rem" }}>
                    {ind.titel}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>
                    {ind.text}
                  </p>
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
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem",
            }}>
              {t.leistEyebrow}
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              maxWidth: "520px",
            }}>
              {t.leistH2}
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}>
            {t.leistungen.map((l, i) => {
              const Icon = LEIST_ICONS[i];
              return (
                <div key={i} className="bento-card" style={{
                  background: "#f4f7fb", borderRadius: "16px",
                  padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "10px",
                    background: "#1a3f6f",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}>
                    <Icon size={20} color="white" />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.625rem" }}>
                    {l.titel}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.75 }}>
                    {l.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ EIN TAG IN DER GRUPPE ═════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem",
            }}>
              {t.tagEyebrow}
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              {t.tagH2}
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "500px", margin: "0.75rem auto 0", lineHeight: 1.75 }}>
              {t.tagSub}
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem",
          }}>
            {t.therapeutischerAlltag.map((slot, i) => (
              <div key={i} className="bento-card" style={{
                background: "white", borderRadius: "16px",
                padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
              }}>
                <p style={{
                  fontSize: "11px", fontWeight: 800, color: "#6FA3FE",
                  letterSpacing: "0.08em", marginBottom: "0.75rem",
                  background: "#eef4ff", display: "inline-block",
                  padding: "3px 10px", borderRadius: "9999px",
                }}>
                  {slot.zeit}
                </p>
                <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "14px", marginBottom: "0.5rem" }}>
                  {slot.titel}
                </p>
                <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>
                  {slot.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ UNSER ANSATZ ══════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
        padding: "5rem 0", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="site-container" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.75rem",
            }}>
              {t.ansatzEyebrow}
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "white", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              {t.ansatzH2}
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {t.ansatz.map((a, i) => {
              const Icon = ANSATZ_ICONS[i];
              return (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px", padding: "2rem",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
                    <span style={{
                      fontSize: "11px", fontWeight: 800, color: "#6FA3FE",
                      background: "rgba(111,163,254,0.15)", padding: "4px 10px",
                      borderRadius: "8px", letterSpacing: "0.04em",
                    }}>{String(i + 1).padStart(2, "0")}</span>
                    <Icon size={18} color="#6FA3FE" />
                  </div>
                  <p style={{ fontWeight: 700, color: "white", fontSize: "15px", marginBottom: "0.75rem" }}>
                    {a.titel}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>
                    {a.text}
                  </p>
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
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem",
            }}>
              {t.prozEyebrow}
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              {t.prozH2}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {t.prozessSchritte.map((s, i) => {
              const Icon = PROZ_ICONS[i];
              return (
                <div key={i} style={{ display: "flex", gap: "1.75rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{
                      width: "52px", height: "52px", borderRadius: "50%",
                      background: "#1a3f6f",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, zIndex: 1,
                    }}>
                      <Icon size={22} color="white" />
                    </div>
                    {i < t.prozessSchritte.length - 1 && (
                      <div style={{ width: "2px", flex: 1, background: "#dde4ee", minHeight: "40px", margin: "4px 0" }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: "2.5rem", paddingTop: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
                      <p style={{ fontWeight: 800, color: "#1a3f6f", fontSize: "16px" }}>{s.titel}</p>
                      <span style={{
                        fontSize: "11px", fontWeight: 700, color: "#6FA3FE",
                        background: "#eef4ff", padding: "3px 10px", borderRadius: "9999px",
                        letterSpacing: "0.04em",
                      }}>{s.dauer}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.75 }}>{s.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FÜR FACHKRÄFTE ════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container" style={{
          display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "5rem", alignItems: "start",
        }}>
          <div>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem",
            }}>
              {t.fachEyebrow}
            </p>
            <h2 style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.25, letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}>
              {t.fachH2}
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.85, marginBottom: "2rem" }}>
              {t.fachP}
            </p>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#1a3f6f", color: "white",
              fontWeight: 700, fontSize: "14px",
              padding: "12px 22px", borderRadius: "10px",
              textDecoration: "none",
            }}>
              <ClipboardList size={16} />
              {t.fachPlatzBtn}
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {t.fachItems.map((item, i) => {
              const Icon = FACH_ICONS[i];
              return (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "1rem 1.25rem", background: "#f4f7fb",
                  borderRadius: "12px", border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "9px",
                    background: "#1a3f6f",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={16} color="white" />
                  </div>
                  <p style={{ fontSize: "13px", color: "#1a3f6f", fontWeight: 500, lineHeight: 1.55 }}>
                    {item}
                  </p>
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
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem",
            }}>
              {t.faqEyebrow}
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              {t.faqH2}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {t.faq.map((f, i) => (
              <details key={i} style={{ background: "white", borderRadius: "12px", overflow: "hidden" }}>
                <summary style={{
                  padding: "1.25rem 1.5rem",
                  cursor: "pointer", listStyle: "none",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  fontWeight: 700, color: "#1a3f6f", fontSize: "14px", lineHeight: 1.45,
                }}>
                  {f.frage}
                  <ChevronDown size={16} color="#6FA3FE" style={{ flexShrink: 0, marginLeft: "1rem" }} />
                </summary>
                <div style={{
                  padding: "0 1.5rem 1.25rem",
                  fontSize: "13px", color: "#374151", lineHeight: 1.8,
                }}>
                  {f.antwort}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
        padding: "6rem 0", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="site-container" style={{ position: "relative", maxWidth: "640px" }}>
          <Home size={36} color="#6FA3FE" style={{ marginBottom: "1.5rem" }} />
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800,
            color: "white", marginBottom: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>
            {t.ctaH2}
          </h2>
          <p style={{
            fontSize: "15px", color: "rgba(255,255,255,0.6)",
            marginBottom: "2.5rem", lineHeight: 1.75,
          }}>
            {t.ctaP}
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#6FA3FE", color: "white",
              fontWeight: 700, fontSize: "15px",
              padding: "15px 30px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              <ClipboardList size={18} />
              {t.ctaPlatzBtn}
            </Link>
            <a href="tel:+493022454322" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white", fontWeight: 600, fontSize: "14px",
              padding: "15px 26px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              <Phone size={16} />
              +49 30 22 45 43 22
            </a>
            <Link href="/kontakt" style={{
              display: "inline-flex", alignItems: "center",
              color: "rgba(255,255,255,0.55)", fontWeight: 500, fontSize: "14px",
              padding: "15px 20px", textDecoration: "none",
            }}>
              {t.ctaKontaktBtn}
            </Link>
          </div>
        </div>
      </section>

      <SeoFaqSchema items={TRANS.de.faq.map(f => ({ q: f.frage, a: f.antwort }))} />
      <SeoBreadcrumb crumbs={[{ name: "Therapie & Wohnen", slug: "therapie-wohnen" }]} />
    </main>
  );
}

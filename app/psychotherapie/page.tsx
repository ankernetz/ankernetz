"use client";
import Link from "next/link";
import {
  Phone, Heart, Shield, Brain, Star, Clock,
  CheckCircle, ArrowRight, Users, FileText,
  Stethoscope, HandHeart, UserCheck, ClipboardList,
  ChevronDown, Lock, Activity, Zap,
  BookOpen, Target, Layers, MessageSquare,
  AlertTriangle, Eye, Smile, GraduationCap,
  RefreshCw, Sparkles, ThumbsUp,
} from "lucide-react";

import { SeoFaqSchema } from "../components/SeoFaqSchema";
import { SeoBreadcrumb } from "../components/SeoBreadcrumb";
import { useT } from "../i18n/useT";

const TRANS = {
  de: {
    heroEyebrow: "Ankernetz Psychotherapie",
    heroTitle1: "Kinder- und Jugend­psychotherapie.",
    heroTitle2: "Mit Kassensitz.",
    heroSub: "Professionelle Therapie, direkt eingebunden in das Ankernetz-System. Approbierte Therapeuten, evidenzbasierte Verfahren und kurze Wege - für Kinder und Jugendliche, die therapeutische Unterstützung brauchen.",
    heroTerminBtn: "Termin anfragen",
    heroKontaktBtn: "Kontakt aufnehmen",
    kennzahlen: [
      { wert: "Kassensitz", label: "Keine Privatkosten - abgerechnet über gesetzliche Krankenversicherung" },
      { wert: "KJP", label: "Approbierte Kinder- und Jugendlichenpsychotherapeuten" },
      { wert: "direkt", label: "Eingebunden in das Ankernetz-Betreuungsnetz" },
      { wert: "kurz", label: "Kurze Wartezeiten durch eigene interne Kapazitäten" },
    ],
    bannerText: "Kassensitz vorhanden - keine Privatkosten für Familien",
    bannerSub: "Abrechnung über alle gesetzlichen Krankenkassen.",
    bannerBtn: "Termin vereinbaren",
    einlEyebrow: "Warum Psychotherapie im Hilfesystem?",
    einlH2: "Therapie dort, wo Kinder leben.",
    einlP1: "Der größte Schwachpunkt im Jugendhilfesystem ist die Trennung von pädagogischer Betreuung und therapeutischer Behandlung. Kinder in Wohngruppen bekommen Therapie in externen Praxen - ohne Verbindung zum Alltag, ohne Abstimmung mit den Betreuern.",
    einlP2: "Wir schließen diese Lücke. Unsere approbierten Kinder- und Jugendlichenpsychotherapeuten sind direkt in das Ankernetz-System eingebunden. Was in der Therapiestunde bearbeitet wird, kann im Alltag aufgegriffen werden - und umgekehrt.",
    einlP3: "Das Ergebnis: Therapie, die wirkt. Nicht trotz des Systems - sondern durch es.",
    checkItems: [
      "Approbierte Kinder- und Jugendlichenpsychotherapeuten",
      "Kassensitz - kein Eigenanteil für Familien",
      "Direkt vernetzt mit Wohngruppen und Bezugsbetreuern",
      "Kurze Wartezeiten durch eigene interne Kapazitäten",
      "Traumaspezialisierung: PTBS, komplexe Traumatisierung",
      "Eltern- und Familientherapie als fester Bestandteil",
      "Regelmäßige Fallbesprechungen mit dem Betreuungsteam",
      "Kriseninterventionsgespräche ohne lange Wartezeiten",
    ],
    stoerEyebrow: "Störungsbilder",
    stoerH2: "Was wir behandeln",
    stoerSub: "Wir behandeln das gesamte Spektrum psychischer Störungen bei Kindern und Jugendlichen - mit besonderer Expertise in komplexen Traumatisierungen und Bindungsstörungen.",
    stoerungsbilder: [
      { titel: "Trauma-Folgestörungen (PTBS)", text: "Einfache und komplexe PTBS nach Misshandlung, Missbrauch, Vernachlässigung oder anderen traumatischen Erlebnissen. Spezialisierung auf entwicklungstraumatische Störungsbilder." },
      { titel: "Depressionen & affektive Störungen", text: "Depressive Episoden, Dysthymie, bipolare Entwicklungen und emotionale Regulationsstörungen bei Kindern und Jugendlichen." },
      { titel: "Angststörungen", text: "Trennungsangst, soziale Phobie, generalisierte Angststörung, Panikstörung, spezifische Phobien und Schulangst." },
      { titel: "ADHS & Aufmerksamkeitsstörungen", text: "Diagnostik und Behandlung von ADHS mit und ohne Hyperaktivität. Verhaltenstherapeutische Interventionen, Elternberatung, Schulkooperation." },
      { titel: "Verhaltensauffälligkeiten & Störungen des Sozialverhaltens", text: "Aggressives Verhalten, Dissozialität, Oppositionelles Trotzverhalten (ODD) als Ausdruck von Belastungserleben und Regulationsproblemen." },
      { titel: "Selbstverletzendes Verhalten", text: "Nicht-suizidales selbstverletzendes Verhalten, Suizidgedanken und -handlungen als Krisenzeichen - im spezialisierten therapeutischen Setting." },
      { titel: "Bindungs- und Beziehungsstörungen", text: "Reaktive Bindungsstörungen und andere Störungen des Bindungsverhaltens, die therapeutische Arbeit an frühen Beziehungserfahrungen erfordern." },
      { titel: "Somatoforme & psychosomatische Störungen", text: "Körperliche Beschwerden ohne ausreichend erklärenden Organbefund als Ausdruck psychischer Belastung - bei Kindern und Jugendlichen häufig unterschätzt." },
    ],
    verfEyebrow: "Therapeutische Verfahren",
    verfH2: "Evidenzbasierte Methoden für wirksame Behandlung",
    kassenlabel: "Kassenleistung",
    kassenfooter: "Kassenleistung = Abrechnung über gesetzliche Krankenversicherung möglich",
    verfahren: [
      { titel: "Kognitive Verhaltenstherapie (KVT)", text: "Evidenzbasiertes Standardverfahren. Arbeit an dysfunktionalen Denk- und Verhaltensmustern, Aufbau von Bewältigungsstrategien und Emotionsregulation.", kassensitz: true },
      { titel: "Traumafokussierte KVT (TF-KVT)", text: "Spezialisiertes Verfahren bei PTBS und komplexen Traumatisierungen. Stabilisierung, Traumabearbeitung und Integration in klar strukturierten Phasen.", kassensitz: true },
      { titel: "EMDR", text: "Eye Movement Desensitization and Reprocessing. Effektives Verfahren zur Verarbeitung traumatischer Erinnerungen. Zugelassen für Erwachsene, adaptiert für Kinder und Jugendliche.", kassensitz: true },
      { titel: "Bindungsbasierte Therapieverfahren", text: "Therapiemethoden, die gezielt an frühen Bindungserfahrungen ansetzen - für Kinder mit Bindungsstörungen und desorganisierten Bindungsmustern.", kassensitz: false },
      { titel: "Eltern- und Familientherapie", text: "Einbeziehung der Familie als Ressource und Wirkfaktor. Elterngespräche, Erziehungsberatung, Kommunikationsarbeit und systemische Interventionen.", kassensitz: true },
      { titel: "Spieltherapeutische Methoden", text: "Für Kinder, die noch nicht verbal kommunizieren können. Symbolspiel, Sandspiel, kreative Medien als therapeutischer Zugang.", kassensitz: false },
      { titel: "DBT-A (Dialektisch-Behaviorale Therapie)", text: "Adaptiertes DBT für Jugendliche - speziell bei Borderline-Entwicklungen, selbstverletzendem Verhalten und schwerer Emotionsdysregulation.", kassensitz: true },
      { titel: "Psychoedukation", text: "Verständnis für das eigene Erleben entwickeln. Störungsaufklärung für Kinder, Jugendliche und Eltern als Basis jeder therapeutischen Arbeit.", kassensitz: false },
    ],
    vorteilEyebrow: "Warum Ankernetz?",
    vorteilH2: "Therapie im Verbund - nicht im Silo",
    tabelleCol1: "Merkmal",
    tabelleCol2: "Ankernetz",
    tabelleCol3: "Externe Praxis",
    unterschiede: [
      { merkmal: "Kassensitz", ankernetz: "Ja - abgerechnet über gesetzliche KV", andere: "Oft nur Privatpraxis oder Selbstzahler" },
      { merkmal: "Vernetzung mit Wohngruppe", ankernetz: "Direkt - kurze Wege, täglicher Austausch", andere: "Externe Praxis - oft kein Kontakt" },
      { merkmal: "Wartezeit", ankernetz: "Kurz durch eigene Kapazitäten", andere: "6-18 Monate in externen Praxen" },
      { merkmal: "Fallbesprechungen", ankernetz: "Wöchentlich intern möglich", andere: "Selten, aufwendig zu koordinieren" },
      { merkmal: "Kriseninterventionen", ankernetz: "Direkt, ohne Umwege", andere: "Termingebunden, keine Flexibilität" },
    ],
    prozEyebrow: "Ablauf",
    prozH2: "Von der Anmeldung zur Behandlung",
    therapeutischerProzess: [
      { titel: "Anmeldung & Erstgespräch", text: "Anmeldung über das Jugendamt, eine Einrichtung, die Familie oder direkt. Probatorische Sitzungen zur gegenseitigen Einschätzung - ohne Verpflichtung.", dauer: "Woche 1-2" },
      { titel: "Diagnostik & Einschätzung", text: "Systematische Diagnostik mit validierten Verfahren. ICD-11-orientierte Einschätzung, Anamnese und Erstellung des therapeutischen Behandlungsplans.", dauer: "Woche 2-4" },
      { titel: "Antrag & Bewilligung", text: "Beantragung der Kostenübernahme bei der Krankenkasse. Unser Team übernimmt die gesamte Bürokratie - für Familien und Jugendämter.", dauer: "Parallel" },
      { titel: "Therapiebeginn", text: "Wöchentliche Einzelsitzungen à 50 Minuten. Ergänzt durch Elterngespräche, Gruppenangebote und - wo sinnvoll - Koordination mit dem Betreuungsteam.", dauer: "Ab Monat 1" },
      { titel: "Vernetzung im System", text: "Regelmäßige Fallbesprechungen mit Wohngruppenpädagogen, Lehrern, Jugendamtsfachkräften. Therapie und Alltag sprechen eine Sprache.", dauer: "Laufend" },
      { titel: "Abschluss & Weiterversorgung", text: "Gezielter Therapieabschluss mit Stabilisierungsplan. Übergabe in ambulante Nachsorge oder Weiterbehandlung - kein abruptes Ende.", dauer: "Ab Monat 12" },
    ],
    fachEyebrow: "Für Jugendämter & Einrichtungen",
    fachH2: "Therapie als Teil des Hilfesystems",
    fachP: "Für Fachkräfte im Jugendamt bedeutet unser Angebot: eine therapeutische Versorgung, die ins Gesamtsystem eingebettet ist und keine parallelen Kommunikationswege erfordert.",
    fachBtn: "Direkt anfragen",
    fachItems: [
      "Kassensitz - keine zusätzliche Kostenübernahme erforderlich",
      "Kurze Wartezeiten: priorisierte Aufnahme für Kinder in Ankernetz-Einrichtungen",
      "Regelmäßige Rückmeldungen an Bezugsbetreuer und Jugendamt",
      "Therapeutische Stellungnahmen für Hilfeplanvorbereitung",
      "Teilnahme an Fallbesprechungen und Hilfeplangesprächen",
      "Kriseninterventionsgespräche ohne lange Wartezeiten",
      "Gutachten und Einschätzungsberichte auf Anfrage",
      "Schweigepflicht und DSGVO-konforme Datenweitergabe",
    ],
    faqEyebrow: "Häufige Fragen",
    faqH2: "Was Familien und Fachkräfte fragen",
    faq: [
      { frage: "Wer übernimmt die Kosten der Psychotherapie?", antwort: "Wir verfügen über einen Kassensitz. Das bedeutet: Die Therapie wird über die gesetzliche Krankenversicherung abgerechnet. Für Familien entstehen keine Eigenkosten. Bei Kindern und Jugendlichen in Jugendhilfeleistungen kann die Kostenübernahme auch über §34 SGB VIII erfolgen - wir klären das gemeinsam." },
      { frage: "Wie lange dauert eine Psychotherapie?", antwort: "Das hängt von Störungsbild und Therapieziel ab. Kurztherapien umfassen 12-24 Stunden, Langzeittherapien bis zu 80 Stunden und mehr. Bei komplexen Traumatisierungen ist eine längere Therapiedauer in der Regel erforderlich. Die Kassenleistung sieht verschiedene Kontingente vor." },
      { frage: "Ab welchem Alter können Kinder in Therapie?", antwort: "Wir arbeiten mit Kindern ab dem Vorschulalter (ca. 5 Jahre) bis zum Ende der Jugendhilfeleistung. Für sehr junge Kinder setzen wir spieltherapeutische und bindungsbasierte Methoden ein. Säuglinge und Kleinkinder werden in unserem Frühe-Hilfen-Angebot begleitet." },
      { frage: "Wie ist die Therapie mit dem Alltag in der Wohngruppe vernetzt?", antwort: "Das ist einer unserer zentralen Vorteile: Therapeuten und Pädagogen tauschen sich regelmäßig aus - in kollegialen Fallbesprechungen, im direkten Gespräch und durch gemeinsame Behandlungspläne. Was in der Therapiestunde bearbeitet wird, kann im Alltag aufgegriffen und geübt werden." },
      { frage: "Können auch ambulante Kinder (ohne Heimunterbringung) in Therapie?", antwort: "Ja. Unser Therapieangebot steht nicht nur Kindern in Ankernetz-Einrichtungen offen. Familien, Jugendliche und Kinder aus dem Berliner Umfeld können sich direkt anmelden. Der Kassensitz gilt für alle gesetzlich Versicherten." },
      { frage: "Werden Eltern in die Therapie einbezogen?", antwort: "Ja - in aller Regel. Elterngespräche sind fester Bestandteil jeder Kinder- und Jugendlichenpsychotherapie. Bei Bedarf bieten wir auch Eltern-Kind-Therapie oder spezifische Elternberatung an. Die Einbeziehung der Familie verbessert die Therapieergebnisse nachweislich." },
      { frage: "Was ist der Unterschied zwischen Psychotherapie und heilpädagogischer Förderung?", antwort: "Psychotherapie zielt auf die Behandlung psychischer Störungen - sie ist krankenkassenfinanziert und an ein Störungsbild geknüpft. Heilpädagogische Förderung unterstützt Entwicklung und Alltagskompetenz - sie ist pädagogisch ausgerichtet und oft jugendhilfefinanziert. Beides kann sich sinnvoll ergänzen." },
      { frage: "Wie verläuft eine typische Therapiestunde?", antwort: "50 Minuten, wöchentlich. Inhalt und Methode richten sich nach Alter, Störungsbild und aktuellem Befinden des Kindes. Bei Jüngeren arbeiten wir viel mit Spiel, Symbolik und kreativen Medien. Bei Jugendlichen stehen Gespräch, Verhaltensanalysen und Skill-Training im Vordergrund." },
    ],
    ctaH2: "Therapie, die dort wirkt, wo das Leben stattfindet.",
    ctaP: "Termin anfragen oder Informationen für Ihr Jugendamt. Wir melden uns innerhalb von 24 Stunden.",
    ctaTerminBtn: "Termin anfragen",
    ctaKontaktBtn: "Kontakt aufnehmen",
    ctaPlatzBtn: "Platzanfrage stellen",
    seoFaqIntro: "Ankernetz bietet Kinder- und Jugendlichenpsychotherapie in Berlin mit Kassensitz – eingebunden in das Jugendhilfesystem. Hier finden Eltern, Jugendliche und Fachkräfte Antworten zu Therapeutensuche, Kassenzulassung und Therapieablauf in Berlin.",
  },
  en: {
    heroEyebrow: "Ankernetz Psychotherapy",
    heroTitle1: "Child and adolescent­psychotherapy.",
    heroTitle2: "Covered by statutory health insurance.",
    heroSub: "Professional therapy directly integrated into the Ankernetz system. Accredited therapists, evidence-based methods, and short pathways — for children and young people who need therapeutic support.",
    heroTerminBtn: "Request an appointment",
    heroKontaktBtn: "Get in touch",
    kennzahlen: [
      { wert: "Insurance-approved", label: "No private costs — billed through statutory health insurance" },
      { wert: "KJP", label: "Accredited child and adolescent psychotherapists" },
      { wert: "integrated", label: "Directly embedded in the Ankernetz care network" },
      { wert: "short", label: "Short waiting times thanks to in-house capacity" },
    ],
    bannerText: "Insurance-approved — no private costs for families",
    bannerSub: "Billing accepted by all statutory health insurance providers.",
    bannerBtn: "Book an appointment",
    einlEyebrow: "Why psychotherapy within the welfare system?",
    einlH2: "Therapy where children live.",
    einlP1: "The biggest weakness in the youth welfare system is the separation of pedagogical care and therapeutic treatment. Children in residential facilities receive therapy at external practices — disconnected from daily life, without coordination with their carers.",
    einlP2: "We close this gap. Our accredited child and adolescent psychotherapists are directly embedded in the Ankernetz system. What is addressed in the therapy session can be picked up in everyday life — and vice versa.",
    einlP3: "The result: therapy that works. Not in spite of the system — but through it.",
    checkItems: [
      "Accredited child and adolescent psychotherapists",
      "Insurance-approved — no out-of-pocket costs for families",
      "Directly networked with residential groups and key workers",
      "Short waiting times thanks to in-house capacity",
      "Trauma specialisation: PTSD, complex traumatisation",
      "Parent and family therapy as an integral component",
      "Regular case discussions with the care team",
      "Crisis intervention sessions without long waiting times",
    ],
    stoerEyebrow: "Conditions treated",
    stoerH2: "What we treat",
    stoerSub: "We treat the full spectrum of mental health conditions in children and young people — with particular expertise in complex trauma and attachment disorders.",
    stoerungsbilder: [
      { titel: "Trauma-related disorders (PTSD)", text: "Simple and complex PTSD following abuse, neglect, or other traumatic experiences. Specialisation in developmental trauma disorders." },
      { titel: "Depression & mood disorders", text: "Depressive episodes, dysthymia, bipolar developments, and emotional regulation disorders in children and young people." },
      { titel: "Anxiety disorders", text: "Separation anxiety, social phobia, generalised anxiety disorder, panic disorder, specific phobias, and school refusal." },
      { titel: "ADHD & attention disorders", text: "Diagnosis and treatment of ADHD with and without hyperactivity. Behavioural therapy interventions, parent counselling, school cooperation." },
      { titel: "Behavioural problems & conduct disorders", text: "Aggressive behaviour, antisocial conduct, oppositional defiant disorder (ODD) as expressions of stress and regulation difficulties." },
      { titel: "Self-harming behaviour", text: "Non-suicidal self-injury, suicidal ideation and actions as crisis signals — addressed in a specialised therapeutic setting." },
      { titel: "Attachment and relationship disorders", text: "Reactive attachment disorders and other attachment behaviour disorders requiring therapeutic work on early relational experiences." },
      { titel: "Somatoform & psychosomatic disorders", text: "Physical symptoms without sufficient organic explanation as an expression of psychological distress — frequently underestimated in children and young people." },
    ],
    verfEyebrow: "Therapeutic methods",
    verfH2: "Evidence-based methods for effective treatment",
    kassenlabel: "Insurance-covered",
    kassenfooter: "Insurance-covered = billing through statutory health insurance is possible",
    verfahren: [
      { titel: "Cognitive Behavioural Therapy (CBT)", text: "Evidence-based standard method. Work on dysfunctional thought and behaviour patterns, building coping strategies and emotion regulation.", kassensitz: true },
      { titel: "Trauma-focused CBT (TF-CBT)", text: "Specialised method for PTSD and complex trauma. Stabilisation, trauma processing, and integration in clearly structured phases.", kassensitz: true },
      { titel: "EMDR", text: "Eye Movement Desensitization and Reprocessing. Effective method for processing traumatic memories. Approved for adults, adapted for children and young people.", kassensitz: true },
      { titel: "Attachment-based therapy methods", text: "Therapy methods that specifically address early attachment experiences — for children with attachment disorders and disorganised attachment patterns.", kassensitz: false },
      { titel: "Parent and family therapy", text: "Involving the family as a resource and active factor. Parent sessions, parenting guidance, communication work, and systemic interventions.", kassensitz: true },
      { titel: "Play therapy methods", text: "For children who cannot yet communicate verbally. Symbolic play, sand play, creative media as therapeutic access.", kassensitz: false },
      { titel: "DBT-A (Dialectical Behaviour Therapy)", text: "Adapted DBT for adolescents — specifically for borderline developments, self-harming behaviour, and severe emotional dysregulation.", kassensitz: true },
      { titel: "Psychoeducation", text: "Developing understanding of one's own experience. Disorder education for children, young people, and parents as the basis of every therapeutic process.", kassensitz: false },
    ],
    vorteilEyebrow: "Why Ankernetz?",
    vorteilH2: "Therapy as part of a network — not in a silo",
    tabelleCol1: "Feature",
    tabelleCol2: "Ankernetz",
    tabelleCol3: "External practice",
    unterschiede: [
      { merkmal: "Insurance-approved", ankernetz: "Yes — billed through statutory health insurance", andere: "Often private practice or self-pay only" },
      { merkmal: "Integration with residential group", ankernetz: "Direct — short pathways, daily exchange", andere: "External practice — often no contact" },
      { merkmal: "Waiting time", ankernetz: "Short thanks to in-house capacity", andere: "6–18 months at external practices" },
      { merkmal: "Case discussions", ankernetz: "Weekly internally possible", andere: "Rare, difficult to coordinate" },
      { merkmal: "Crisis interventions", ankernetz: "Direct, without detours", andere: "Appointment-bound, no flexibility" },
    ],
    prozEyebrow: "Process",
    prozH2: "From registration to treatment",
    therapeutischerProzess: [
      { titel: "Registration & initial session", text: "Registration via the Youth Welfare Office, a facility, the family, or directly. Probationary sessions for mutual assessment — without obligation.", dauer: "Weeks 1–2" },
      { titel: "Diagnostics & assessment", text: "Systematic diagnostics using validated methods. ICD-11-oriented assessment, case history, and creation of the therapeutic treatment plan.", dauer: "Weeks 2–4" },
      { titel: "Application & approval", text: "Application for cost coverage from the health insurance provider. Our team handles all the bureaucracy — for families and Youth Welfare Offices.", dauer: "In parallel" },
      { titel: "Start of therapy", text: "Weekly individual sessions of 50 minutes. Supplemented by parent sessions, group offers, and — where appropriate — coordination with the care team.", dauer: "From month 1" },
      { titel: "System integration", text: "Regular case discussions with residential group educators, teachers, and Youth Welfare Office caseworkers. Therapy and daily life speak the same language.", dauer: "Ongoing" },
      { titel: "Conclusion & follow-up care", text: "Planned therapy conclusion with a stabilisation plan. Handover to outpatient aftercare or continued treatment — no abrupt ending.", dauer: "From month 12" },
    ],
    fachEyebrow: "For Youth Welfare Offices & facilities",
    fachH2: "Therapy as part of the support system",
    fachP: "For Youth Welfare Office caseworkers, our offer means: therapeutic care that is embedded in the overall system and requires no parallel communication pathways.",
    fachBtn: "Make a direct enquiry",
    fachItems: [
      "Insurance-approved — no additional cost coverage required",
      "Short waiting times: prioritised admission for children in Ankernetz facilities",
      "Regular feedback to key workers and the Youth Welfare Office",
      "Therapeutic statements for care plan preparation",
      "Participation in case discussions and care planning meetings",
      "Crisis intervention sessions without long waiting times",
      "Expert reports and assessment documents on request",
      "Professional confidentiality and GDPR-compliant data sharing",
    ],
    faqEyebrow: "Frequently asked questions",
    faqH2: "What families and professionals ask",
    faq: [
      { frage: "Who covers the costs of psychotherapy?", antwort: "We hold an insurance approval (Kassensitz). This means: therapy is billed through statutory health insurance. Families have no out-of-pocket costs. For children and young people receiving youth welfare services, costs may also be covered under §34 German Social Code Book VIII (SGB VIII) — we clarify this together." },
      { frage: "How long does psychotherapy last?", antwort: "This depends on the condition and therapy goals. Short-term therapies comprise 12–24 sessions, long-term therapies up to 80 sessions or more. Complex trauma typically requires a longer course of therapy. Statutory insurance provides for different session quotas." },
      { frage: "From what age can children enter therapy?", antwort: "We work with children from pre-school age (approximately 5 years) through to the end of their youth welfare placement. For very young children we use play therapy and attachment-based methods. Infants and toddlers are supported through our Early Support (Frühe Hilfen) programme." },
      { frage: "How is therapy integrated with everyday life in the residential group?", antwort: "This is one of our key advantages: therapists and educators exchange information regularly — in collegial case discussions, in direct conversation, and through shared treatment plans. What is addressed in the therapy session can be applied and practised in everyday life." },
      { frage: "Can outpatient children (not in residential care) also receive therapy?", antwort: "Yes. Our therapy offer is not limited to children in Ankernetz facilities. Families, young people, and children from the Berlin area can register directly. The insurance approval applies to all statutory insurance holders." },
      { frage: "Are parents involved in therapy?", antwort: "Yes — as a rule. Parent sessions are an integral part of every child and adolescent psychotherapy. Where needed, we also offer parent–child therapy or specific parent counselling. Involving the family demonstrably improves therapy outcomes." },
      { frage: "What is the difference between psychotherapy and therapeutic education?", antwort: "Psychotherapy aims at treating mental health conditions — it is funded by health insurance and linked to a specific diagnosis. Therapeutic education supports development and everyday competence — it is pedagogically oriented and often funded through youth welfare. Both can complement each other effectively." },
      { frage: "What does a typical therapy session look like?", antwort: "50 minutes, weekly. Content and method are tailored to the child's age, condition, and current state. With younger children we work extensively with play, symbolism, and creative media. With adolescents, conversation, behavioural analysis, and skills training take centre stage." },
    ],
    ctaH2: "Therapy that works where life happens.",
    ctaP: "Request an appointment or information for your Youth Welfare Office. We respond within 24 hours.",
    ctaTerminBtn: "Request an appointment",
    ctaKontaktBtn: "Get in touch",
    ctaPlatzBtn: "Request a placement",
    seoFaqIntro: "Ankernetz provides child and adolescent psychotherapy in Berlin covered by statutory health insurance — integrated into the youth welfare system. Here parents, young people, and professionals find answers about finding a therapist, insurance approval, and the therapy process in Berlin.",
  },
};

const KENN_ICONS = [Shield, Brain, Layers, Zap];
const STOER_ICONS = [Brain, Heart, AlertTriangle, Activity, Shield, Eye, Users, Smile];
const VERF_ICONS = [Brain, Shield, RefreshCw, Heart, Users, Sparkles, Activity, BookOpen];
const PROZ_ICONS = [Phone, ClipboardList, FileText, Brain, Layers, ArrowRight];
const FACH_ICONS = [Shield, Zap, MessageSquare, ClipboardList, Users, Brain, FileText, Lock];
const STOER_AKZENT = ["#8b5cf6", "#e11d48", "#f97316", "#0891b2", "#ef4444", "#dc2626", "#1a3f6f", "#059669"];

export default function PsychotherapiePage() {
  const t = useT(TRANS);
  return (
    <main style={{ overflowX: "hidden", background: "#f4f7fb" }}>

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "5rem", paddingTop: "8rem", background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "12%", right: "6%", width: "480px", height: "480px", borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(111,163,254,0.1) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: "20%", left: "3%", width: "300px", height: "300px", borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)" }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>{t.heroEyebrow}</p>
          <h1 style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.25rem", maxWidth: "18ch" }}>
            {t.heroTitle1}<br /><span style={{ color: "#6FA3FE" }}>{t.heroTitle2}</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: "560px", marginBottom: "3rem" }}>{t.heroSub}</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
            <a href="tel:+493022454322" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#6FA3FE", color: "white", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "12px", textDecoration: "none" }}>
              <Phone size={18} />{t.heroTerminBtn}
            </a>
            <Link href="/kontakt" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontWeight: 600, fontSize: "14px", padding: "14px 24px", borderRadius: "12px", textDecoration: "none" }}>
              {t.heroKontaktBtn}
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden" }}>
            {t.kennzahlen.map((k, idx) => {
              const Icon = KENN_ICONS[idx];
              return (
                <div key={idx} style={{ background: "rgba(255,255,255,0.04)", padding: "1.5rem 1.25rem" }}>
                  <Icon size={18} color="#6FA3FE" style={{ marginBottom: "10px" }} />
                  <p style={{ fontSize: "1.5rem", fontWeight: 900, color: "white", lineHeight: 1 }}>{k.wert}</p>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "6px", lineHeight: 1.5 }}>{k.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ KASSENSITZ-BANNER ═════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(90deg, #1a3f6f 0%, #2d5fa0 100%)", padding: "1.25rem 0" }}>
        <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Shield size={20} color="#6FA3FE" />
            <p style={{ color: "white", fontWeight: 700, fontSize: "14px" }}>{t.bannerText}</p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px" }}>{t.bannerSub}</p>
          </div>
          <a href="tel:+493022454322" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "white", fontWeight: 700, fontSize: "13px", padding: "8px 18px", borderRadius: "8px", textDecoration: "none", flexShrink: 0 }}>
            <Phone size={14} />{t.bannerBtn}
          </a>
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

      {/* ══ STÖRUNGSBILDER ════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem" }}>{t.stoerEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1rem" }}>{t.stoerH2}</h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75 }}>{t.stoerSub}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {t.stoerungsbilder.map((s, idx) => {
              const Icon = STOER_ICONS[idx];
              const akzent = STOER_AKZENT[idx];
              return (
                <div key={idx} className="bento-card" style={{ background: "white", borderRadius: "16px", padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: akzent + "15", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <Icon size={22} color={akzent} />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.5rem" }}>{s.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ VERFAHREN ═════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.verfEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: "540px" }}>{t.verfH2}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {t.verfahren.map((v, idx) => {
              const Icon = VERF_ICONS[idx];
              return (
                <div key={idx} className="bento-card" style={{ background: "#f4f7fb", borderRadius: "16px", padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)", position: "relative" }}>
                  {v.kassensitz && (
                    <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem", background: "#dcfce7", borderRadius: "9999px", padding: "2px 10px", fontSize: "10px", fontWeight: 700, color: "#166534", letterSpacing: "0.04em" }}>{t.kassenlabel}</div>
                  )}
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#1a3f6f", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <Icon size={20} color="white" />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.625rem" }}>{v.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.75 }}>{v.text}</p>
                </div>
              );
            })}
          </div>
          <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "1.5rem", textAlign: "center" }}>{t.kassenfooter}</p>
        </div>
      </section>

      {/* ══ UNSER VORTEIL ══════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem" }}>{t.vorteilEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t.vorteilH2}</h2>
          </div>
          <div style={{ background: "white", borderRadius: "20px", overflow: "hidden", boxShadow: "0 2px 24px rgba(26,63,111,0.08)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", background: "#1a3f6f", padding: "1rem 1.5rem", gap: "1rem" }}>
              <p style={{ fontWeight: 700, color: "rgba(255,255,255,0.5)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{t.tabelleCol1}</p>
              <p style={{ fontWeight: 700, color: "#6FA3FE", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{t.tabelleCol2}</p>
              <p style={{ fontWeight: 700, color: "rgba(255,255,255,0.5)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{t.tabelleCol3}</p>
            </div>
            {t.unterschiede.map((u, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", padding: "1rem 1.5rem", gap: "1rem", background: i % 2 === 0 ? "#f4f7fb" : "white", alignItems: "center", borderBottom: i < t.unterschiede.length - 1 ? "1px solid #eef2f8" : "none" }}>
                <p style={{ fontWeight: 600, color: "#1a3f6f", fontSize: "14px" }}>{u.merkmal}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle size={14} color="#22c55e" style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.4 }}>{u.ankernetz}</p>
                </div>
                <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: 1.4 }}>{u.andere}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROZESS ═══════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="site-container" style={{ position: "relative", maxWidth: "820px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.75rem" }}>{t.prozEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "white", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t.prozH2}</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {t.therapeutischerProzess.map((s, i) => {
              const Icon = PROZ_ICONS[i];
              return (
                <div key={i} style={{ display: "flex", gap: "1.75rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={22} color="white" />
                    </div>
                    {i < t.therapeutischerProzess.length - 1 && (
                      <div style={{ width: "1px", flex: 1, background: "rgba(255,255,255,0.12)", minHeight: "40px", margin: "4px 0" }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: "2.5rem", paddingTop: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
                      <p style={{ fontWeight: 800, color: "white", fontSize: "16px" }}>{s.titel}</p>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#6FA3FE", background: "rgba(111,163,254,0.15)", padding: "3px 10px", borderRadius: "9999px" }}>{s.dauer}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{s.text}</p>
                  </div>
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
            <a href="tel:+493022454322" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#1a3f6f", color: "white", fontWeight: 700, fontSize: "14px", padding: "12px 22px", borderRadius: "10px", textDecoration: "none" }}>
              <Phone size={16} />{t.fachBtn}
            </a>
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
          <Brain size={36} color="#6FA3FE" style={{ marginBottom: "1.5rem" }} />
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "white", marginBottom: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{t.ctaH2}</h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", marginBottom: "2.5rem", lineHeight: 1.75 }}>{t.ctaP}</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+493022454322" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#6FA3FE", color: "white", fontWeight: 700, fontSize: "15px", padding: "15px 30px", borderRadius: "12px", textDecoration: "none" }}>
              <Phone size={18} />{t.ctaTerminBtn}
            </a>
            <Link href="/kontakt" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontWeight: 600, fontSize: "14px", padding: "15px 26px", borderRadius: "12px", textDecoration: "none" }}>
              {t.ctaKontaktBtn}<ArrowRight size={15} />
            </Link>
            <Link href="/platzanfrage" style={{ display: "inline-flex", alignItems: "center", color: "rgba(255,255,255,0.55)", fontWeight: 500, fontSize: "14px", padding: "15px 20px", textDecoration: "none" }}>
              {t.ctaPlatzBtn}
            </Link>
          </div>
        </div>
      </section>

      <SeoFaqSchema items={TRANS.de.faq.map(f => ({ q: f.frage, a: f.antwort }))} />
      <SeoBreadcrumb crumbs={[{ name: "Psychotherapie", slug: "psychotherapie" }]} />
    </main>
  );
}

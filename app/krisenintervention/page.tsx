"use client";
import Link from "next/link";
import {
  Phone, Clock, Shield, AlertTriangle, Heart, Brain,
  Users, FileText, CheckCircle, ArrowRight, Home,
  Zap, Activity, Eye, HandHeart, MessageSquare,
  Star, Lock, Stethoscope, UserCheck, ClipboardList,
  ChevronDown, Siren,
} from "lucide-react";

import { SeoFaqSchema } from "../components/SeoFaqSchema";
import { SeoBreadcrumb } from "../components/SeoBreadcrumb";
import { useT } from "../i18n/useT";

const TRANS = {
  de: {
    heroBadge: "Jetzt erreichbar - 24/7",
    heroEyebrow: "Ankernetz Krisenintervention",
    heroTitle1: "Sofort da.",
    heroTitle2: "Wenn es zählt.",
    heroP1: "Wenn du gerade nicht weiterweißt, bist du nicht allein.",
    heroP2: "In akuten Krisensituationen ist es wichtig, schnell jemanden zu erreichen, der zuhört und dich ernst nimmt. Unser Krisendienst ist rund um die Uhr für dich da. Ohne Warteschleifen, ohne komplizierte Wege.",
    heroP3: "Du kannst dich jederzeit melden: wir hören dir zu, helfen dir, deine Situation einzuordnen und schauen gemeinsam, was jetzt wichtig ist.",
    heroCallBtn: "Jetzt anrufen: +49 30 22 45 43 22",
    heroPlatzBtn: "Platzanfrage stellen",
    kennzahlen: [
      { wert: "24/7", label: "Erreichbar an 365 Tagen im Jahr" },
      { wert: "< 30 Min", label: "Erste Rückmeldung nach Ihrem Anruf" },
      { wert: "< 4h", label: "Aufnahme in akuten Krisensituationen" },
      { wert: "15+", label: "Jahre Erfahrung in der Krisenarbeit" },
    ],
    bannerTitle: "Krisennotfall? Wir sind sofort für Sie da.",
    bannerSub: "Kein Anrufbeantworter - echte Fachkräfte am Telefon.",
    einleitungEyebrow: "Was ist Krisenintervention?",
    einleitungH2: "Schnelle Hilfe, wenn sie wirklich gebraucht wird.",
    einleitungP1: "Krisenintervention bedeutet, in akuten Situationen unmittelbar zu handeln und Unterstützung bereitzustellen. Sie kommt dann zum Einsatz, wenn bestehende Hilfen nicht mehr ausreichen und kurzfristig Stabilität geschaffen werden muss.",
    einleitungP2: "In solchen Momenten geht es darum, Sicherheit herzustellen, Orientierung zu geben und gemeinsam erste tragfähige Schritte zu entwickeln - für den Jugendlichen und sein Umfeld.",
    einleitungP3: "Unser Team besteht aus erfahrenen Sozialpädagoginnen, Psychologinnen und Therapeut*innen mit besonderer Expertise in der Arbeit mit Krisensituationen.",
    einleitungP4: "Wir arbeiten strukturiert, eng abgestimmt und verlässlich - im Kontakt mit dem Jugendlichen, der Familie und dem zuständigen Jugendamt.",
    einleitungP5: "Ziel ist es, die Situation zu stabilisieren und eine passende Perspektive zu entwickeln.",
    checkItems: [
      "Keine Warteliste - Aufnahme direkt bei freiem Platz",
      "Bereitschaftsdienst mit echten Fachkräften",
      "Strukturiertes Aufnahmegespräch und Erstdiagnostik",
      "Enge Kooperation mit dem zuständigen Jugendamt",
      "Traumasensible Pädagogik als Grundprinzip",
      "Transparente Dokumentation und regelmäßige Berichte",
      "Klare Übergabe in Anschlusshilfen",
    ],
    indiEyebrow: "Wann wir helfen",
    indiH2: "Indikationen für Krisenintervention",
    indiSub: "Krisenintervention ist keine Pauschallösung - sie greift in klar definierten Situationen, in denen sofortiger Schutz und Stabilisierung notwendig sind.",
    indikationen: [
      { titel: "Suizidgefährdung", text: "Akute Gedanken, Pläne oder Handlungen in Bezug auf selbstverletzende oder suizidale Verhaltensweisen." },
      { titel: "Fremdgefährdung", text: "Situationen, in denen von dem Jugendlichen eine ernsthafte Gefährdung für andere Personen ausgeht." },
      { titel: "Akute psychische Dekompensation", text: "Psychotische Episoden, schwere Dissoziationen, manische Phasen oder andere akute psychiatrische Zustände." },
      { titel: "Familiäre Eskalation / Inobhutnahme", text: "Häusliche Gewalt, Trennung, Wohnungslosigkeit oder Konstellationen, die eine sofortige Herausnahme erfordern." },
      { titel: "Traumatische Ereignisse", text: "Unmittelbar nach Misshandlung, sexuellem Missbrauch, Unfällen oder dem Verlust einer nahestehenden Person." },
      { titel: "Selbstverletzendes Verhalten", text: "Eskalierendes selbstverletzendes Verhalten, das eine intensive Begleitung und Sicherung erfordert." },
      { titel: "Systemversagen / Hilfeabbruch", text: "Wenn laufende Hilfen abbrechen, Unterbringungen scheitern oder das Kind aus dem Hilfesystem herausfällt." },
      { titel: "Unklare Gefährdungslage", text: "Situationen, bei denen der Schutzbedarf noch nicht eingeschätzt werden kann und rasch Klarheit benötigt wird." },
    ],
    leistEyebrow: "Unser Leistungsangebot",
    leistH2: "Was wir in der Krise leisten",
    leistungen: [
      { titel: "Sofortaufnahme rund um die Uhr", text: "Unser Bereitschaftsdienst ist täglich 24 Stunden erreichbar. Aufnahmen sind auch nachts, an Wochenenden und Feiertagen möglich - ohne bürokratische Hürden." },
      { titel: "Erstdiagnostik & Kriseneinschätzung", text: "Direkt nach der Aufnahme erfolgt eine strukturierte Ersteinschätzung durch unser Fachteam. Wir klären Schutzbedarfe, Ressourcen und erste Behandlungsansätze." },
      { titel: "Schutz & Sofortstabilisierung", text: "Sicherung des körperlichen und psychischen Schutzes steht an erster Stelle. Klare Strukturen, Verlässlichkeit und Ruhe bilden die Basis der ersten Tage." },
      { titel: "Psychotherapeutische Krisenarbeit", text: "Intensive Einzelgespräche mit Therapeuten ab dem ersten Tag. Traumasensible Stabilisierungsverfahren, Ressourcenaktivierung und Krisenplanung." },
      { titel: "Engmaschige Bezugsbetreuung", text: "Jeder Jugendliche hat eine feste Bezugsfachkraft, die rund um die Uhr ansprechbar ist. Persönliche Kontinuität als zentrales Sicherheitselement." },
      { titel: "Familie & soziales Umfeld einbeziehen", text: "Krise betrifft nicht nur das Kind. Wir beziehen Eltern, Geschwister und relevante Bezugspersonen von Anfang an ein - immer mit Blick auf Schutz und Ressourcen." },
      { titel: "Kooperation mit dem Jugendamt", text: "Regelmäßige schriftliche Rückmeldungen, klare Dokumentation und direkter Draht zur zuständigen Fachkraft. Transparenz als Grundprinzip." },
      { titel: "Perspektivklärung & Überleitung", text: "Nach der Stabilisierung erarbeiten wir gemeinsam mit Jugendamt und Familie eine Weichenstellung: Heimrückkehr, therapeutisches Wohnen oder andere Folgehilfen." },
      { titel: "Ärztliche Versorgung & Medikation", text: "Kooperation mit Kinder- und Jugendpsychiatern sichert die medizinische Versorgung. Krankenhauseinweisungen werden wenn möglich vermieden." },
    ],
    prozessEyebrow: "Ablauf",
    prozessH2: "Vom ersten Anruf zur Stabilisierung",
    prozessSchritte: [
      { titel: "Kontaktaufnahme", text: "Das Jugendamt oder eine Fachkraft ruft unsere Krisenleitung an - zu jeder Tages- und Nachtzeit. Kein Anrufbeantworter, kein Wartesystem.", dauer: "Sofort" },
      { titel: "Ersteinschätzung", text: "Innerhalb von 30 Minuten erste Rückmeldung zu Aufnahmekapazität, Passung und weiteren Schritten. Bei Bedarf Fachgespräch mit dem zuständigen Mitarbeiter.", dauer: "< 30 Min" },
      { titel: "Aufnahme & Ankommen", text: "Strukturierte, ruhige Aufnahme mit Erstgespräch, Zimmerorientierung und erstem Kennenlernen des Teams. Fokus auf Sicherheit und Orientierung.", dauer: "< 4h" },
      { titel: "Stabilisierungsphase", text: "Intensive Begleitung in den ersten Tagen: Diagnostik, Krisenplanarbeit, Bezugsbetreuung und erste therapeutische Gespräche. Enger Kontakt mit Jugendamt.", dauer: "Tage 1-7" },
      { titel: "Perspektivklärung", text: "Gemeinsam mit Jugendamt, Familie und dem Jugendlichen wird eine klare Anschlussversorgung entwickelt. Wir begleiten den Übergang aktiv.", dauer: "Ab Tag 7" },
    ],
    besEyebrow: "Was uns auszeichnet",
    besH2: "Krisenintervention mit Haltung",
    besonderheiten: [
      { titel: "Rund-um-die-Uhr-Bereitschaft", text: "An 365 Tagen im Jahr. Unser Krisentelefon wird von qualifizierten Fachkräften besetzt - kein Callcenter, kein Anrufbeantworter." },
      { titel: "Spezialisiertes Krisenteam", text: "Sozialpädagogen, Psychologen und Therapeuten mit spezifischer Ausbildung in Krisenintervention, Traumapädagogik und psychiatrischer Notfallversorgung." },
      { titel: "Aufnahme innerhalb von Stunden", text: "Kein Wartezimmer, keine Warteliste. Wenn ein Platz frei ist, kann die Aufnahme noch am selben Tag erfolgen - auch mitten in der Nacht." },
      { titel: "Vertraulichkeit & Datenschutz", text: "Strenge Schweigepflicht. Alle übermittelten Informationen werden ausschließlich zur Fallbearbeitung genutzt und sicher verwahrt." },
      { titel: "Klare Dokumentation", text: "Tagesberichte, Einschätzungsbögen und Krisenprotokolle. Das Jugendamt erhält regelmäßige, strukturierte Rückmeldungen zum Hilfeverlauf." },
      { titel: "Traumasensible Haltung", text: "Unser Ansatz basiert auf dem Grundsatz: Verhalten ist Kommunikation. Kein Jugendlicher wird pathologisiert - wir verstehen Krisen als Botschaften." },
    ],
    fachEyebrow: "Für Jugendämter & Fachkräfte",
    fachH2: "Ihr verlässlicher Partner in der Krise",
    fachP: "Als Jugendamt oder Fachkraft wissen Sie: In einer Krise zählt jede Stunde. Wir verstehen Ihre Anforderungen - transparente Kommunikation, schnelle Reaktion und klare Dokumentation.",
    fachBtn: "Direkte Krisenleitung",
    fachItems: [
      "Direkte Aufnahmenummer ohne Umwege - immer eine Fachkraft am Hörer",
      "Aufnahmebericht innerhalb von 24h nach Einzug",
      "Wöchentliche Statusberichte per E-Mail oder Fax",
      "Fester Ansprechpartner für die gesamte Hilfedauer",
      "Krisenprotokolle und Einschätzungsbögen nach ICD-10-Standard",
      "Hilfeplanvorbereitung und aktive Teilnahme an HPG",
      "Unterstützung bei der Überleitung in Anschlusshilfen",
      "DSGVO-konforme Datenweitergabe und Schweigepflicht",
    ],
    zielEyebrow: "Zielgruppe",
    zielH2: "Für wen ist Krisenintervention gedacht?",
    zielAlterLabel: "Jahre",
    zielAlterText: "Unsere Krisenintervention richtet sich primär an Jugendliche zwischen 12 und 17 Jahren, die sich in akuten psychischen, sozialen oder familiären Krisensituationen befinden.",
    zielItems: [
      { label: "Psychische Erkrankungen", desc: "Erstmanifestation oder Dekompensation psychiatrischer Störungsbilder" },
      { label: "Familiäre Krisen", desc: "Eskalation, häusliche Gewalt, Trennungssituationen, Wohnungsverlust" },
      { label: "Traumatische Erlebnisse", desc: "Misshandlung, Missbrauch, Verlust, Unfälle und andere traumatische Ereignisse" },
      { label: "Systemversagen", desc: "Wenn andere Hilfen abbrechen oder nicht mehr greifen" },
    ],
    chatEyebrow: "Sofortkontakt per Chat",
    chatH2: "Lena ist Ihre erste Anlaufstelle - direkt und unkompliziert.",
    chatP1pre: "Unser Chat-Assistent ",
    chatP1post: " ist auf jeder Seite unten rechts für Sie erreichbar. Sie beantwortet erste Fragen zur Krisenintervention, hilft bei der Orientierung und zeigt Ihnen, an wen Sie sich wenden können.",
    chatP2: "Wenn Sie Lena kontaktieren, wird Ihr Anliegen direkt an unser Team weitergeleitet. So stellen wir sicher, dass keine Anfrage unbeachtet bleibt und sich zeitnah eine Fachkraft bei Ihnen meldet.",
    chatP3: "Schnell. Verlässlich. Ohne Umwege.",
    chatBullets: [
      "24/7 erreichbar - wann immer Sie Unterstützung brauchen",
      "Ihr Anliegen kommt direkt bei uns an",
      "Einfach schreiben - ohne Hürden oder komplizierte Schritte",
      "Vertraulich und respektvoll im Umgang mit Ihren Daten",
    ],
    chatOnline: "Online · Ankernetz-Team",
    chatMsg1: "Hallo, ich bin Lena vom Ankernetz-Team. Wie kann ich Ihnen heute helfen?",
    chatMsg2: "Wir brauchen dringend einen Krisenplatz für heute Nacht.",
    chatMsg3: "Ich leite Ihre Anfrage sofort an unser Bereitschaftsteam weiter. Sie werden innerhalb weniger Minuten zurückgerufen.",
    chatNotified: "Mitarbeiter wurde benachrichtigt",
    chatPlaceholder: "Schreiben Sie eine Nachricht …",
    chatWidgetHint: "Chat-Widget unten rechts auf jeder Seite verfügbar.",
    faqEyebrow: "Häufige Fragen",
    faqH2: "Was Fachkräfte am häufigsten fragen",
    faq: [
      { frage: "Wie schnell kann eine Aufnahme erfolgen?", antwort: "Bei freiem Platz ist eine Aufnahme noch am selben Tag möglich - auch nachts oder am Wochenende. Unsere Bereitschaft ist an 365 Tagen aktiv. Nach dem ersten Anruf melden wir uns innerhalb von 30 Minuten mit einer konkreten Rückmeldung." },
      { frage: "Wer kann eine Krisenintervention beauftragen?", antwort: "Grundsätzlich können Jugendämter, Sozialdienste, Schulen, Kliniken, Betreuungseinrichtungen und auch Erziehungsberechtigte Kontakt aufnehmen. Die formelle Hilfegewährung erfolgt über das zuständige Jugendamt gemäß §34 SGB VIII." },
      { frage: "Wie lange dauert eine Krisenintervention in der Regel?", antwort: "Die Stabilisierungsphase beträgt typischerweise 14-28 Tage. Nach ausreichender Stabilisierung wird gemeinsam mit Jugendamt und Familie ein Anschlussplan entwickelt. Eine Verlängerung ist bei Bedarf möglich." },
      { frage: "Was passiert, wenn kein Platz frei ist?", antwort: "Wir informieren Sie sofort über unsere aktuelle Kapazität. Bei voller Belegung helfen wir aktiv bei der Vermittlung in geeignete Partnereinrichtungen und bleiben am Ball." },
      { frage: "Wie läuft die Kooperation mit dem Jugendamt ab?", antwort: "Wir pflegen engmaschigen Kontakt: Aufnahmebericht, wöchentliche Rückmeldungen, Krisenprotokolle und Hilfeplanvorbereitung. Ihr zuständiger Mitarbeiter hat immer einen festen Ansprechpartner bei uns." },
      { frage: "Werden auch Kinder unter 12 Jahren aufgenommen?", antwort: "Unsere Krisenintervention ist primär auf Jugendliche ab 12 Jahren ausgerichtet. Für Kinder unter 12 vermitteln wir auf Anfrage in geeignete Einrichtungen und unterstützen das Jugendamt bei der Versorgungsplanung." },
      { frage: "Gibt es psychiatrische Versorgung vor Ort?", antwort: "Wir kooperieren eng mit Kinder- und Jugendpsychiatern, die kurzfristig konsiliarisch verfügbar sind. Medikamentöse Behandlung wird wenn möglich ambulant geregelt. Bei stationär-psychiatrischem Bedarf begleiten wir die Einweisung." },
      { frage: "Können Eltern während der Krisenintervention Kontakt halten?", antwort: "Ja - sofern dies dem Kindeswohl nicht entgegensteht. Wir regeln Besuchs- und Kontaktregelungen transparent mit dem Jugendamt und beziehen Eltern aktiv in den Stabilisierungsprozess ein." },
    ],
    ctaBadge: "24/7 erreichbar",
    ctaH2: "Eine Krise duldet keinen Aufschub.",
    ctaP: "Rufen Sie uns jetzt an - oder stellen Sie eine Platzanfrage. Unser Team meldet sich sofort.",
    ctaPlatzBtn: "Platzanfrage stellen",
    ctaKontaktBtn: "Kontakt aufnehmen",
    seoFaqIntro: "Ankernetz ist Berlins spezialisierter Anbieter für 24/7 Krisenintervention für Kinder und Jugendliche. Hier finden Fachkräfte, Eltern und Jugendämter Antworten auf die wichtigsten Fragen zu unserem Kriseninterventionsangebot in Berlin.",
  },
  en: {
    heroBadge: "Available now - 24/7",
    heroEyebrow: "Ankernetz Crisis Intervention",
    heroTitle1: "There immediately.",
    heroTitle2: "When it counts.",
    heroP1: "If you don't know where to turn right now, you are not alone.",
    heroP2: "In acute crisis situations it is vital to reach someone quickly who listens and takes you seriously. Our crisis service is available around the clock - no hold music, no complicated processes.",
    heroP3: "You can contact us at any time: we listen, help you make sense of your situation, and work out together what matters most right now.",
    heroCallBtn: "Call now: +49 30 22 45 43 22",
    heroPlatzBtn: "Request a placement",
    kennzahlen: [
      { wert: "24/7", label: "Available 365 days a year" },
      { wert: "< 30 min", label: "First response after your call" },
      { wert: "< 4 h", label: "Admission in acute crisis situations" },
      { wert: "15+", label: "Years of experience in crisis work" },
    ],
    bannerTitle: "Crisis emergency? We are available immediately.",
    bannerSub: "No answering machine - real professionals on the line.",
    einleitungEyebrow: "What is crisis intervention?",
    einleitungH2: "Rapid support when it is truly needed.",
    einleitungP1: "Crisis intervention means acting immediately in acute situations and providing support. It is called upon when existing services are no longer sufficient and stability must be established at short notice.",
    einleitungP2: "In such moments the priority is to establish safety, provide orientation, and jointly develop first viable steps - for the young person and their environment.",
    einleitungP3: "Our team consists of experienced social educators, psychologists, and therapists with particular expertise in crisis work.",
    einleitungP4: "We work in a structured, closely coordinated, and reliable manner - in contact with the young person, the family, and the responsible Youth Welfare Office.",
    einleitungP5: "Our goal is to stabilise the situation and develop an appropriate outlook.",
    checkItems: [
      "No waiting list - admission as soon as a place is available",
      "On-call service staffed by real professionals",
      "Structured admission interview and initial assessment",
      "Close cooperation with the responsible Youth Welfare Office",
      "Trauma-sensitive pedagogy as a core principle",
      "Transparent documentation and regular reports",
      "Clear handover to follow-up services",
    ],
    indiEyebrow: "When we help",
    indiH2: "Indications for crisis intervention",
    indiSub: "Crisis intervention is not a blanket solution - it applies in clearly defined situations requiring immediate protection and stabilisation.",
    indikationen: [
      { titel: "Suicidality", text: "Acute thoughts, plans, or actions involving self-harming or suicidal behaviour." },
      { titel: "Risk to others", text: "Situations in which the young person poses a serious risk to other individuals." },
      { titel: "Acute psychological decompensation", text: "Psychotic episodes, severe dissociation, manic phases, or other acute psychiatric conditions." },
      { titel: "Family escalation / emergency placement", text: "Domestic violence, separation, homelessness, or constellations requiring immediate removal from the home." },
      { titel: "Traumatic events", text: "Immediately following abuse, sexual assault, accidents, or the loss of a close person." },
      { titel: "Self-harming behaviour", text: "Escalating self-harm that requires intensive accompaniment and safeguarding." },
      { titel: "System breakdown / service collapse", text: "When ongoing support breaks down, placements fail, or the child falls out of the support system." },
      { titel: "Unclear endangerment situation", text: "Situations where the level of protection required cannot yet be assessed and clarity is needed quickly." },
    ],
    leistEyebrow: "Our range of services",
    leistH2: "What we provide during a crisis",
    leistungen: [
      { titel: "Round-the-clock emergency admission", text: "Our on-call service is reachable 24 hours a day. Admissions are possible at night, on weekends, and on public holidays - without bureaucratic hurdles." },
      { titel: "Initial assessment & crisis evaluation", text: "Immediately after admission, our specialist team carries out a structured initial assessment. We clarify protection needs, resources, and first treatment approaches." },
      { titel: "Protection & immediate stabilisation", text: "Ensuring physical and psychological safety is the first priority. Clear structures, reliability, and calm form the foundation of the first days." },
      { titel: "Psychotherapeutic crisis work", text: "Intensive individual sessions with therapists from day one. Trauma-sensitive stabilisation methods, resource activation, and crisis planning." },
      { titel: "Close key-worker support", text: "Every young person has a dedicated key worker who is reachable around the clock. Personal continuity as a central safety element." },
      { titel: "Involving family & social environment", text: "A crisis does not affect only the child. We involve parents, siblings, and relevant caregivers from the outset - always with an eye on protection and resources." },
      { titel: "Cooperation with the Youth Welfare Office", text: "Regular written updates, clear documentation, and direct contact with the responsible caseworker. Transparency as a fundamental principle." },
      { titel: "Clarifying next steps & transition", text: "After stabilisation we work with the Youth Welfare Office and family to set the course: return home, therapeutic residential care, or other follow-up services." },
      { titel: "Medical care & medication", text: "Cooperation with child and adolescent psychiatrists ensures medical coverage. Hospital admissions are avoided where possible." },
    ],
    prozessEyebrow: "Process",
    prozessH2: "From first call to stabilisation",
    prozessSchritte: [
      { titel: "Initial contact", text: "The Youth Welfare Office or a professional calls our crisis line - at any time of day or night. No answering machine, no queuing system.", dauer: "Immediately" },
      { titel: "Initial assessment", text: "Within 30 minutes: first feedback on admission capacity, fit, and next steps. A specialist consultation with the responsible staff member if needed.", dauer: "< 30 min" },
      { titel: "Admission & settling in", text: "Structured, calm admission with an intake interview, room orientation, and a first introduction to the team. Focus on safety and orientation.", dauer: "< 4 h" },
      { titel: "Stabilisation phase", text: "Intensive support in the first days: diagnostics, crisis plan work, key-worker care, and initial therapeutic sessions. Close contact with the Youth Welfare Office.", dauer: "Days 1-7" },
      { titel: "Clarifying next steps", text: "Together with the Youth Welfare Office, family, and the young person, a clear follow-up care plan is developed. We actively support the transition.", dauer: "From day 7" },
    ],
    besEyebrow: "What sets us apart",
    besH2: "Crisis intervention with conviction",
    besonderheiten: [
      { titel: "Round-the-clock availability", text: "365 days a year. Our crisis line is staffed by qualified professionals - no call centre, no answering machine." },
      { titel: "Specialised crisis team", text: "Social educators, psychologists, and therapists with specific training in crisis intervention, trauma pedagogy, and psychiatric emergency care." },
      { titel: "Admission within hours", text: "No waiting room, no waiting list. When a place is available, admission can happen on the same day - even in the middle of the night." },
      { titel: "Confidentiality & data protection", text: "Strict professional confidentiality. All transmitted information is used exclusively for case processing and stored securely." },
      { titel: "Clear documentation", text: "Daily reports, assessment forms, and crisis protocols. The Youth Welfare Office receives regular, structured feedback on the progress of support." },
      { titel: "Trauma-sensitive approach", text: "Our approach is based on the principle: behaviour is communication. No young person is pathologised - we understand crises as messages." },
    ],
    fachEyebrow: "For Youth Welfare Offices & professionals",
    fachH2: "Your reliable partner in crisis situations",
    fachP: "As a Youth Welfare Office or professional, you know: in a crisis every hour counts. We understand your requirements - transparent communication, rapid response, and clear documentation.",
    fachBtn: "Direct crisis line",
    fachItems: [
      "Direct admission number with no detours - always a professional on the line",
      "Admission report within 24 hours of move-in",
      "Weekly status reports by e-mail or fax",
      "Dedicated contact person for the entire duration of support",
      "Crisis protocols and assessment forms in accordance with ICD-10",
      "Care plan preparation and active participation in care planning meetings",
      "Support with the transition to follow-up services",
      "GDPR-compliant data sharing and professional confidentiality",
    ],
    zielEyebrow: "Target group",
    zielH2: "Who is crisis intervention designed for?",
    zielAlterLabel: "years",
    zielAlterText: "Our crisis intervention is primarily aimed at young people between the ages of 12 and 17 who are in acute psychological, social, or family crisis situations.",
    zielItems: [
      { label: "Mental health conditions", desc: "First manifestation or decompensation of psychiatric disorders" },
      { label: "Family crises", desc: "Escalation, domestic violence, separation, loss of housing" },
      { label: "Traumatic experiences", desc: "Abuse, assault, bereavement, accidents, and other traumatic events" },
      { label: "System breakdown", desc: "When other forms of support break down or cease to be effective" },
    ],
    chatEyebrow: "Instant contact via chat",
    chatH2: "Lena is your first point of contact - direct and straightforward.",
    chatP1pre: "Our chat assistant ",
    chatP1post: " is available at the bottom right of every page. She answers initial questions about crisis intervention, helps with orientation, and shows you who to contact.",
    chatP2: "When you contact Lena, your enquiry is forwarded directly to our team. This ensures that no request goes unnoticed and a professional gets back to you promptly.",
    chatP3: "Fast. Reliable. Without detours.",
    chatBullets: [
      "Available 24/7 - whenever you need support",
      "Your enquiry reaches us directly",
      "Simply write - no barriers or complicated steps",
      "Confidential and respectful handling of your data",
    ],
    chatOnline: "Online · Ankernetz team",
    chatMsg1: "Hello, I am Lena from the Ankernetz team. How can I help you today?",
    chatMsg2: "We urgently need a crisis placement for tonight.",
    chatMsg3: "I am forwarding your request to our on-call team immediately. You will be called back within a few minutes.",
    chatNotified: "Staff member has been notified",
    chatPlaceholder: "Write a message …",
    chatWidgetHint: "Chat widget available at the bottom right of every page.",
    faqEyebrow: "Frequently asked questions",
    faqH2: "What professionals ask most often",
    faq: [
      { frage: "How quickly can an admission take place?", antwort: "If a place is available, admission can happen on the same day - including at night or at the weekend. Our on-call service is active 365 days a year. After the first call we respond within 30 minutes with concrete feedback." },
      { frage: "Who can commission crisis intervention?", antwort: "Youth Welfare Offices, social services, schools, clinics, residential facilities, and legal guardians can all make contact. Formal authorisation of services is provided by the responsible Youth Welfare Office in accordance with §34 German Social Code Book VIII (SGB VIII)." },
      { frage: "How long does crisis intervention typically last?", antwort: "The stabilisation phase typically lasts 14-28 days. Once sufficient stabilisation has been achieved, a follow-up plan is developed together with the Youth Welfare Office and family. Extension is possible if required." },
      { frage: "What happens if no place is available?", antwort: "We inform you immediately about our current capacity. If we are fully occupied, we actively assist in finding a suitable partner facility and remain engaged." },
      { frage: "How does cooperation with the Youth Welfare Office work?", antwort: "We maintain close contact: admission report, weekly updates, crisis protocols, and care plan preparation. Your responsible caseworker always has a dedicated contact person at our organisation." },
      { frage: "Are children under the age of 12 also admitted?", antwort: "Our crisis intervention is primarily designed for young people aged 12 and above. For children under 12 we can refer to suitable facilities on request and support the Youth Welfare Office in care planning." },
      { frage: "Is psychiatric care available on site?", antwort: "We cooperate closely with child and adolescent psychiatrists who are available for consultation at short notice. Medication management is handled on an outpatient basis where possible. We accompany in-patient psychiatric admissions when necessary." },
      { frage: "Can parents maintain contact during crisis intervention?", antwort: "Yes - provided this does not conflict with the child's best interests. We manage visiting and contact arrangements transparently with the Youth Welfare Office and actively involve parents in the stabilisation process." },
    ],
    ctaBadge: "Available 24/7",
    ctaH2: "A crisis cannot wait.",
    ctaP: "Call us now - or submit a placement request. Our team will respond immediately.",
    ctaPlatzBtn: "Request a placement",
    ctaKontaktBtn: "Get in touch",
    seoFaqIntro: "Ankernetz is Berlin's specialist provider for 24/7 crisis intervention for children and young people. Here professionals, parents, and Youth Welfare Offices will find answers to the most important questions about our crisis intervention services in Berlin.",
  },
};

const INDI_ICONS = [AlertTriangle, Shield, Brain, Home, Activity, Heart, Users, Eye];
const LEIST_ICONS = [Phone, Stethoscope, Shield, Brain, HandHeart, Users, MessageSquare, ClipboardList, Zap];
const PROZESS_ICONS = [Phone, ClipboardList, Home, Activity, ArrowRight];
const BES_ICONS = [Clock, UserCheck, Zap, Lock, FileText, Heart];
const FACH_ICONS = [Phone, FileText, ClipboardList, UserCheck, MessageSquare, CheckCircle, ArrowRight, Lock];

const INDI_AKZENT = ["#ef4444", "#f97316", "#8b5cf6", "#1a3f6f", "#0891b2", "#e11d48", "#059669", "#6FA3FE"];
const KENN_ICONS = [Clock, Zap, AlertTriangle, Star];

export default function KriseninterventionPage() {
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
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "15%", right: "5%", width: "500px", height: "500px", borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(111,163,254,0.1) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: "20%", left: "3%", width: "320px", height: "320px", borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(239,68,68,0.07) 0%, transparent 65%)" }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "9999px", padding: "6px 14px", marginBottom: "2rem" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 0 3px rgba(239,68,68,0.3)", animation: "pulse 1.8s ease-in-out infinite" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#fca5a5", letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.heroBadge}</span>
          </div>

          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>
            {t.heroEyebrow}
          </p>

          <h1 style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.25rem", maxWidth: "14ch" }}>
            {t.heroTitle1}<br />
            <span style={{ color: "#6FA3FE" }}>{t.heroTitle2}</span>
          </h1>

          <div style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: "560px", marginBottom: "3rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{t.heroP1}</p>
            <p>{t.heroP2}</p>
            <p>{t.heroP3}</p>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+493022454322" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#ef4444", color: "white", fontWeight: 700, fontSize: "15px", padding: "14px 28px", borderRadius: "12px", textDecoration: "none", border: "none" }}>
              <Phone size={18} />{t.heroCallBtn}
            </a>
            <Link href="/platzanfrage" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontWeight: 600, fontSize: "14px", padding: "14px 24px", borderRadius: "12px", textDecoration: "none" }}>
              {t.heroPlatzBtn}<ArrowRight size={15} />
            </Link>
          </div>

          <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden", marginTop: "4rem" }}>
            {t.kennzahlen.map((k, idx) => {
              const Icon = KENN_ICONS[idx];
              return (
                <div key={idx} style={{ background: "rgba(255,255,255,0.04)", padding: "1.5rem 1.25rem", backdropFilter: "blur(8px)" }}>
                  <Icon size={18} color="#6FA3FE" style={{ marginBottom: "10px" }} />
                  <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "white", lineHeight: 1 }}>{k.wert}</p>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "6px", lineHeight: 1.5 }}>{k.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ NOTFALL-BANNER ════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(90deg, #7f1d1d 0%, #991b1b 100%)", padding: "1.25rem 0" }}>
        <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Siren size={20} color="#fca5a5" />
            <div>
              <p style={{ color: "white", fontWeight: 700, fontSize: "14px", marginBottom: "2px" }}>{t.bannerTitle}</p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>{t.bannerSub}</p>
            </div>
          </div>
          <a href="tel:+493022454322" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#ef4444", color: "white", fontWeight: 700, fontSize: "13px", padding: "8px 18px", borderRadius: "8px", textDecoration: "none", flexShrink: 0 }}>
            <Phone size={14} />+49 30 22 45 43 22
          </a>
        </div>
      </section>

      {/* ══ EINLEITUNG ════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>{t.einleitungEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>{t.einleitungH2}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>{t.einleitungP1}</p>
              <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>{t.einleitungP2}</p>
              <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>{t.einleitungP3}</p>
              <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>{t.einleitungP4}</p>
              <p style={{ color: "#1a3f6f", lineHeight: 1.85, fontSize: "15px", fontWeight: 600 }}>{t.einleitungP5}</p>
            </div>
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

      {/* ══ INDIKATIONEN ══════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem" }}>{t.indiEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1rem" }}>{t.indiH2}</h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75 }}>{t.indiSub}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {t.indikationen.map((ind, idx) => {
              const Icon = INDI_ICONS[idx];
              const akzent = INDI_AKZENT[idx];
              return (
                <div key={idx} className="bento-card" style={{ background: "white", borderRadius: "16px", padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: akzent + "15", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <Icon size={22} color={akzent} />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.5rem" }}>{ind.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>{ind.text}</p>
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
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: "480px" }}>{t.leistH2}</h2>
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

      {/* ══ PROZESS ═══════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(160deg, #1a3f6f 0%, #2d5fa0 60%, #1a3f6f 100%)", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="site-container" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.75rem" }}>{t.prozessEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "white", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t.prozessH2}</h2>
          </div>
          <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0", position: "relative" }}>
            <div className="step-connector" style={{ position: "absolute", top: "2.25rem", left: "10%", right: "10%", height: "1px", background: "rgba(255,255,255,0.12)" }} />
            {t.prozessSchritte.map((s, i) => {
              const Icon = PROZESS_ICONS[i];
              return (
                <div key={i} style={{ textAlign: "center", padding: "0 0.75rem", position: "relative" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: i === 0 ? "#ef4444" : "rgba(255,255,255,0.1)", border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", position: "relative", zIndex: 1 }}>
                    <Icon size={20} color="white" />
                  </div>
                  <p style={{ fontSize: "10px", fontWeight: 700, color: "#6FA3FE", letterSpacing: "0.06em", marginBottom: "6px" }}>{s.dauer}</p>
                  <p style={{ fontWeight: 700, color: "white", fontSize: "13px", marginBottom: "8px" }}>{s.titel}</p>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ BESONDERHEITEN ════════════════════════════════════════ */}
      <section style={{ background: "#f4f7fb", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.besEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t.besH2}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {t.besonderheiten.map((b, idx) => {
              const Icon = BES_ICONS[idx];
              return (
                <div key={idx} className="bento-card" style={{ background: "white", borderRadius: "16px", padding: "2rem", border: "1px solid rgba(26,63,111,0.07)" }}>
                  <Icon size={24} color="#6FA3FE" style={{ marginBottom: "1rem" }} />
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.625rem" }}>{b.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.75 }}>{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FÜR FACHKRÄFTE ════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "5rem", alignItems: "start" }}>
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

      {/* ══ ZIELGRUPPE ════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem" }}>{t.zielEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t.zielH2}</h2>
          </div>
          <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ background: "#1a3f6f", borderRadius: "20px", padding: "2.5rem", color: "white" }}>
              <p style={{ fontSize: "3rem", fontWeight: 900, color: "#6FA3FE", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>12-17</p>
              <p style={{ fontWeight: 700, fontSize: "18px", marginBottom: "1rem" }}>{t.zielAlterLabel}</p>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontSize: "14px" }}>{t.zielAlterText}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {t.zielItems.map((item) => (
                <div key={item.label} style={{ background: "white", borderRadius: "12px", padding: "1.25rem 1.5rem", border: "1px solid rgba(26,63,111,0.07)" }}>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "14px", marginBottom: "4px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CHAT LENA ════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a3f6f", marginBottom: "1rem" }}>{t.chatEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>{t.chatH2}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.85 }}>
                {t.chatP1pre}<strong style={{ color: "#1a3f6f" }}>Lena</strong>{t.chatP1post}
              </p>
              <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.85 }}>{t.chatP2}</p>
              <p style={{ fontSize: "15px", color: "#1a3f6f", fontWeight: 700, lineHeight: 1.85 }}>{t.chatP3}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {t.chatBullets.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0.75rem 1rem", background: "white", borderRadius: "10px", border: "1px solid rgba(26,63,111,0.08)" }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#6FA3FE", flexShrink: 0 }} />
                  <p style={{ fontSize: "13px", color: "#1a3f6f", fontWeight: 500, lineHeight: 1.5 }}>{p}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ background: "white", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 40px rgba(26,63,111,0.14)", border: "1px solid rgba(26,63,111,0.1)", maxWidth: "360px", margin: "0 auto" }}>
              <div style={{ background: "#1a3f6f", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #6FA3FE 0%, #2d5fa0 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 800, color: "white", flexShrink: 0 }}>L</div>
                <div>
                  <p style={{ fontWeight: 700, color: "white", fontSize: "14px", lineHeight: 1.2 }}>Lena</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "3px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80" }} />
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>{t.chatOnline}</span>
                  </div>
                </div>
              </div>
              <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.875rem", background: "#f4f7fb" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#1a3f6f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 800, color: "white", flexShrink: 0 }}>L</div>
                  <div style={{ background: "white", borderRadius: "12px 12px 12px 0", padding: "10px 14px", maxWidth: "260px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                    <p style={{ fontSize: "13px", color: "#1a3f6f", lineHeight: 1.55 }}>{t.chatMsg1}</p>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div style={{ background: "#1a3f6f", borderRadius: "12px 12px 0 12px", padding: "10px 14px", maxWidth: "220px" }}>
                    <p style={{ fontSize: "13px", color: "white", lineHeight: 1.55 }}>{t.chatMsg2}</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#1a3f6f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 800, color: "white", flexShrink: 0 }}>L</div>
                  <div style={{ background: "white", borderRadius: "12px 12px 12px 0", padding: "10px 14px", maxWidth: "260px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                    <p style={{ fontSize: "13px", color: "#1a3f6f", lineHeight: 1.55 }}>{t.chatMsg3}</p>
                  </div>
                </div>
                <div style={{ textAlign: "center", padding: "0.5rem" }}>
                  <span style={{ fontSize: "11px", color: "#6b7280", background: "rgba(26,63,111,0.07)", borderRadius: "9999px", padding: "4px 12px" }}>{t.chatNotified}</span>
                </div>
              </div>
              <div style={{ padding: "0.875rem 1rem", background: "white", borderTop: "1px solid #eef2f8", display: "flex", gap: "8px", alignItems: "center" }}>
                <div style={{ flex: 1, background: "#f4f7fb", borderRadius: "8px", padding: "9px 14px", fontSize: "13px", color: "#9ca3af" }}>{t.chatPlaceholder}</div>
                <div style={{ width: "34px", height: "34px", borderRadius: "8px", background: "#1a3f6f", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "12px", color: "#6b7280", textAlign: "center", marginTop: "1.25rem", lineHeight: 1.6 }}>{t.chatWidgetHint}</p>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container" style={{ maxWidth: "760px" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.faqEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{t.faqH2}</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {t.faq.map((f, i) => (
              <details key={i} style={{ background: "#f4f7fb", borderRadius: "12px", overflow: "hidden" }}>
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
      <section style={{ background: "linear-gradient(160deg, #1a3f6f 0%, #2d5fa0 60%, #1a3f6f 100%)", padding: "6rem 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="site-container" style={{ position: "relative", maxWidth: "640px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "9999px", padding: "6px 14px", marginBottom: "2rem" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 0 3px rgba(239,68,68,0.3)" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#fca5a5", letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.ctaBadge}</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "white", marginBottom: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{t.ctaH2}</h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", marginBottom: "2.5rem", lineHeight: 1.75 }}>{t.ctaP}</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+493022454322" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#ef4444", color: "white", fontWeight: 700, fontSize: "15px", padding: "15px 30px", borderRadius: "12px", textDecoration: "none" }}>
              <Phone size={18} />+49 30 22 45 43 22
            </a>
            <Link href="/platzanfrage" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontWeight: 600, fontSize: "14px", padding: "15px 26px", borderRadius: "12px", textDecoration: "none" }}>
              {t.ctaPlatzBtn}<ArrowRight size={15} />
            </Link>
            <Link href="/kontakt" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.55)", fontWeight: 500, fontSize: "14px", padding: "15px 20px", textDecoration: "none" }}>
              {t.ctaKontaktBtn}
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }
        details[open] summary svg { transform: rotate(180deg); }
        details summary svg { transition: transform 0.2s; }
      `}</style>
      <SeoFaqSchema items={TRANS.de.faq.map(f => ({ q: f.frage, a: f.antwort }))} />
      <SeoBreadcrumb crumbs={[{ name: "Krisenintervention", slug: "krisenintervention" }]} />
    </main>
  );
}

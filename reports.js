/* ==========================================================================
   Evaluación DISC — Contenido de los informes por perfil
   --------------------------------------------------------------------------
   Texto transcrito de los "REPORTE DE PERFIL DISC" (Rojo, Amarillo, Verde y
   Azul). Cada perfil se muestra según la dimensión predominante del
   participante. Bloques: p (párrafo), sub (subtítulo), ul (lista),
   strength / challenge (Su fortaleza / Su reto), question (pregunta final).
   ========================================================================== */

const DISC_REPORTS = {
  D: {
    title: "Perfil Rojo — El Dominante",
    sections: [
      { title: "1. Descripción general del perfil", blocks: [
        { p: "Las personas con predominancia del estilo Rojo en la metodología DISC se caracterizan por su orientación a los resultados, su determinación y su necesidad de actuar para alcanzar objetivos. Son personas directas, decididas y resolutivas, que suelen sentirse cómodas ante los desafíos, la toma de decisiones y las situaciones que requieren respuestas rápidas." },
        { p: "Su principal motivación es lograr resultados, superar obstáculos y mantener el control sobre las situaciones que enfrentan. Prefieren avanzar antes que quedarse analizando indefinidamente las posibilidades y tienden a buscar soluciones prácticas que les permitan alcanzar sus metas." },
        { p: "Son personas que aportan energía, iniciativa y sentido de urgencia a los equipos. Cuando identifican un objetivo claro, suelen movilizar sus recursos y esfuerzos con persistencia para conseguirlo." },
      ]},
      { title: "2. Características principales", blocks: [
        { sub: "Directo" },
        { p: "Se comunica de manera franca, concreta y sin rodeos. Prefiere las conversaciones orientadas a resolver situaciones y tomar decisiones, antes que las explicaciones extensas o demasiado teóricas. Valora la claridad y espera que los demás expresen sus ideas con precisión." },
        { strength: "facilita la comunicación de objetivos, expectativas y decisiones." },
        { challenge: "aprender a adaptar el tono y la forma de comunicarse para que su franqueza no sea percibida como dureza, impaciencia o falta de consideración." },
        { sub: "Orientado a resultados" },
        { p: "Concentra su atención en las metas, los indicadores de éxito y los resultados que se deben alcanzar. Se siente motivado por los desafíos y por la posibilidad de comprobar que sus acciones generan avances concretos. Suele priorizar lo que considera más importante para cumplir los objetivos." },
        { strength: "mantiene el enfoque en las metas y ayuda a impulsar el desempeño." },
        { challenge: "equilibrar la consecución de resultados con la calidad del proceso, el bienestar de las personas y las relaciones de trabajo." },
        { sub: "Tenaz y persistente" },
        { p: "Cuando se propone alcanzar una meta, demuestra determinación y disposición para superar dificultades. No suele abandonar fácilmente ante los obstáculos y puede mantener su esfuerzo incluso cuando las circunstancias se complican." },
        { strength: "transmite determinación, resistencia y compromiso con los objetivos." },
        { challenge: "reconocer cuándo es necesario cambiar de estrategia, escuchar otras perspectivas o aceptar que una meta requiere replantearse." },
        { sub: "Resolutivo" },
        { p: "Tiene facilidad para identificar problemas, evaluar alternativas y tomar decisiones orientadas a la acción. Prefiere encontrar una solución y avanzar antes que permanecer demasiado tiempo en la incertidumbre. Puede desenvolverse con soltura en situaciones que requieren iniciativa y capacidad de respuesta." },
        { strength: "transforma los problemas en acciones concretas y promueve el avance." },
        { challenge: "asegurarse de comprender todas las variables relevantes antes de decidir, especialmente cuando las consecuencias pueden afectar a otras personas o al negocio." },
        { sub: "Independiente" },
        { p: "Valora la autonomía y la posibilidad de tomar decisiones sin depender constantemente de la aprobación de otras personas. Confía en su criterio y suele preferir espacios donde pueda asumir responsabilidades, definir estrategias y ejecutar sus propias ideas." },
        { strength: "demuestra iniciativa, confianza y capacidad para asumir responsabilidades." },
        { challenge: "reconocer el valor de la colaboración, solicitar apoyo cuando sea necesario e involucrar a otras personas en las decisiones que requieren perspectivas compartidas." },
        { sub: "Rápido e impulsivo" },
        { p: "Tiende a procesar las situaciones con agilidad y a actuar con rapidez. Le resulta natural avanzar, experimentar y tomar decisiones para generar movimiento. Sin embargo, su preferencia por la velocidad puede llevarlo a responder antes de escuchar toda la información o a subestimar algunos riesgos." },
        { strength: "aporta agilidad, dinamismo y capacidad para reaccionar ante situaciones urgentes." },
        { challenge: "incorporar pausas conscientes para analizar las consecuencias, verificar la información y distinguir entre una decisión urgente y una decisión que requiere mayor reflexión." },
        { sub: "Busca la acción" },
        { p: "Prefiere aprender haciendo, enfrentar desafíos y participar activamente en la búsqueda de soluciones. Se energiza cuando tiene objetivos concretos, responsabilidades claras y oportunidades para generar cambios. Las actividades excesivamente rutinarias, las reuniones prolongadas o los procesos lentos pueden disminuir su motivación." },
        { strength: "moviliza a las personas, impulsa iniciativas y convierte las ideas en acciones." },
        { challenge: "comprender que planificar, escuchar, dar seguimiento y evaluar también son acciones necesarias para lograr resultados sostenibles." },
      ]},
      { title: "3. ¿Cómo se comporta en el entorno laboral?", blocks: [
        { p: "En el trabajo, el perfil Rojo suele destacar cuando existen objetivos claros, retos exigentes y espacio para tomar decisiones. Puede asumir el liderazgo de manera espontánea, especialmente cuando percibe que una situación necesita dirección, rapidez o determinación." },
        { p: "Suele aportar valor en situaciones como:" },
        { ul: [
          "Resolver problemas y tomar decisiones bajo presión.",
          "Impulsar proyectos y movilizar al equipo hacia una meta.",
          "Enfrentar obstáculos y mantener el ritmo de ejecución.",
          "Negociar, defender ideas y asumir retos exigentes.",
          "Identificar oportunidades de mejora y promover cambios.",
        ]},
        { p: "Para dar lo mejor de sí, necesita claridad sobre los resultados esperados, autonomía proporcional a sus responsabilidades y oportunidades para asumir desafíos." },
      ]},
      { title: "4. ¿Cómo se comunica el perfil Rojo?", blocks: [
        { p: "La comunicación de una persona con predominancia Roja tiende a ser breve, firme y orientada a la acción. Generalmente quiere saber qué se necesita, cuál es el objetivo, qué decisiones deben tomarse y qué resultados se esperan." },
        { p: "Para comunicarse eficazmente con este perfil, conviene:" },
        { ul: [
          "Ir al punto principal y evitar explicaciones innecesariamente extensas.",
          "Presentar opciones, soluciones y resultados esperados.",
          "Ser claro con los compromisos, los plazos y las responsabilidades.",
          "Argumentar con lógica y datos relevantes.",
          "Expresar los desacuerdos de forma directa, respetuosa y constructiva.",
        ]},
        { p: "Es importante recordar que su estilo directo no significa necesariamente enojo o falta de interés. Muchas veces, simplemente busca eficiencia y avance. De igual manera, su intención de resolver rápidamente puede ser percibida como presión por personas que necesitan más tiempo para analizar o expresar sus opiniones." },
      ]},
      { title: "5. Principales fortalezas y oportunidades de desarrollo", blocks: [
        { sub: "Fortalezas que puede potenciar" },
        { ul: [
          "Determinación para alcanzar objetivos.",
          "Capacidad para tomar decisiones.",
          "Orientación al logro y a la productividad.",
          "Independencia e iniciativa.",
          "Persistencia ante las dificultades.",
          "Rapidez para responder y actuar.",
          "Disposición para asumir retos y responsabilidades.",
        ]},
        { sub: "Oportunidades para crecer" },
        { ul: [
          "Escuchar antes de responder o decidir.",
          "Practicar la empatía y considerar el impacto de sus palabras.",
          "Delegar sin necesidad de controlar cada detalle.",
          "Tener paciencia con ritmos y estilos diferentes.",
          "Analizar los riesgos antes de actuar.",
          "Reconocer los aportes y logros de otras personas.",
          "Valorar el proceso y el aprendizaje, además del resultado final.",
        ]},
      ]},
      { title: "6. Recomendaciones para su desarrollo personal y profesional", blocks: [
        { p: "Para potenciar su efectividad, la persona con predominancia Roja puede trabajar en tres áreas fundamentales:" },
        { sub: "1. Pausar antes de actuar." },
        { p: "Antes de tomar una decisión importante, preguntarse: ¿tengo suficiente información?, ¿qué consecuencias podría generar esta decisión?, ¿qué perspectiva no he considerado?" },
        { sub: "2. Equilibrar firmeza con empatía." },
        { p: "Mantener la claridad y la determinación, incorporando preguntas que permitan escuchar a los demás: ¿cómo lo ves tú?, ¿qué riesgo identificas?, ¿qué necesitas para avanzar?" },
        { sub: "3. Transformar la velocidad en efectividad." },
        { p: "No se trata de dejar de actuar rápido, sino de identificar cuándo conviene avanzar de inmediato y cuándo es necesario detenerse para planificar, consultar o evaluar alternativas." },
      ]},
      { title: "7. Reflexión final", blocks: [
        { p: "El perfil Rojo representa la fuerza de la determinación, la acción y la orientación a resultados. Su capacidad para tomar decisiones, superar obstáculos y movilizar iniciativas puede convertirse en una gran contribución para cualquier equipo u organización." },
        { p: "Su mayor oportunidad de crecimiento consiste en comprender que alcanzar resultados no depende únicamente de la rapidez con la que actuamos, sino también de nuestra capacidad para escuchar, colaborar y reconocer el impacto que generamos en los demás." },
        { p: "El verdadero desarrollo de este perfil no consiste en perder su firmeza, independencia o energía, sino en aprender a utilizarlas de manera consciente y flexible." },
        { question: "¿Cómo puedo mantener mi determinación para alcanzar resultados y, al mismo tiempo, lograr que las personas que trabajan conmigo se sientan escuchadas, valoradas y comprometidas?" },
      ]},
    ],
  },

  I: {
    title: "Perfil Amarillo — El Influyente",
    sections: [
      { title: "1. Descripción general del perfil", blocks: [
        { p: "Las personas con predominancia del estilo Amarillo en la metodología DISC se caracterizan por su energía, entusiasmo, creatividad y facilidad para relacionarse con los demás. Son personas comunicativas, expresivas y sociables, que suelen disfrutar de los espacios donde pueden compartir ideas, intercambiar opiniones e inspirar a otras personas." },
        { p: "Su principal motivación es conectar con las personas, generar entusiasmo y encontrar oportunidades a través de la interacción social. Disfrutan de los ambientes dinámicos, las conversaciones estimulantes y las experiencias que les permiten expresar su creatividad y desarrollar relaciones." },
        { p: "Suelen aportar optimismo, espontaneidad y una perspectiva positiva ante los desafíos. Su capacidad para comunicar ideas, persuadir y motivar a otros puede convertirlos en impulsores de iniciativas y facilitadores de ambientes de trabajo participativos." },
      ]},
      { title: "2. Características principales", blocks: [
        { sub: "Comunicador" },
        { p: "Tiene facilidad para expresar sus ideas, compartir experiencias y establecer conversaciones con diferentes personas. Disfruta de la interacción y suele utilizar la comunicación como una herramienta para construir relaciones, generar acuerdos e influir positivamente en su entorno." },
        { strength: "facilita el intercambio de ideas, promueve la participación y contribuye a crear ambientes abiertos y dinámicos." },
        { challenge: "aprender a escuchar con la misma atención con la que se expresa, organizar sus mensajes y asegurarse de que sus ideas sean comprendidas con claridad." },
        { sub: "Creativo" },
        { p: "Se caracteriza por su imaginación, curiosidad y capacidad para generar ideas novedosas. Tiende a buscar alternativas diferentes, establecer conexiones entre conceptos y explorar posibilidades que otras personas podrían pasar por alto. Suele sentirse motivado por los espacios donde puede innovar y proponer nuevas formas de hacer las cosas." },
        { strength: "aporta ideas originales, identifica oportunidades y estimula la innovación." },
        { challenge: "transformar sus ideas en planes concretos, evaluar su viabilidad y mantener el enfoque necesario para llevarlas hasta su implementación." },
        { sub: "Alto nivel de energía" },
        { p: "Suele mostrar entusiasmo, dinamismo y disposición para participar en diferentes actividades. Su energía puede contagiar a quienes lo rodean y contribuir a mantener un ambiente positivo. Le atraen los entornos activos, las experiencias nuevas y las oportunidades de interacción." },
        { strength: "transmite entusiasmo, impulsa la participación y ayuda a mantener la motivación del equipo." },
        { challenge: "administrar su energía, priorizar las actividades importantes y evitar dispersarse entre demasiados proyectos o estímulos." },
        { sub: "Espontáneo" },
        { p: "Tiende a expresarse de manera natural, actuar con flexibilidad y responder con facilidad a situaciones inesperadas. Disfruta de la improvisación y puede adaptarse con entusiasmo a nuevas experiencias, conversaciones o propuestas." },
        { strength: "aporta frescura, naturalidad y capacidad para desenvolverse en situaciones sociales cambiantes." },
        { challenge: "reconocer cuándo la espontaneidad necesita complementarse con planificación, prudencia y consideración de las consecuencias de sus decisiones." },
        { sub: "Extrovertido" },
        { p: "Encuentra oportunidades para relacionarse, compartir experiencias y conocer personas. Suele sentirse cómodo en grupos y puede tomar la iniciativa para iniciar conversaciones, integrar participantes y crear conexiones entre personas con intereses diferentes." },
        { strength: "facilita la integración, amplía las redes de contacto y promueve la colaboración mediante las relaciones interpersonales." },
        { challenge: "reconocer que no todas las personas necesitan el mismo nivel de interacción y aprender a respetar los espacios de silencio, reflexión e individualidad." },
        { sub: "Persuasivo" },
        { p: "Tiene facilidad para presentar ideas de manera atractiva, despertar interés y movilizar a otras personas hacia una propuesta. Suele utilizar su entusiasmo, habilidad verbal y capacidad para conectar emocionalmente con los demás." },
        { p: "Muestra interés por las personas y disfruta construir vínculos que favorezcan la confianza y la colaboración. Puede recordar detalles de las conversaciones, identificar intereses compartidos y generar cercanía con relativa facilidad. Para este perfil, las relaciones suelen ser una fuente importante de motivación y oportunidades." },
        { strength: "contribuye a crear redes de colaboración, fortalecer el sentido de pertenencia y mejorar el clima interpersonal." },
        { challenge: "cultivar relaciones profundas y consistentes, cumplir los compromisos adquiridos y mantener una comunicación clara incluso cuando debe abordar conversaciones difíciles." },
        { sub: "Motivador" },
        { p: "Tiene facilidad para transmitir optimismo, reconocer posibilidades y animar a otras personas a participar. Suele destacar el potencial de las ideas y ayudar a que los demás se entusiasmen con los objetivos compartidos." },
        { strength: "inspira, genera confianza y contribuye a que las personas se sientan involucradas en los proyectos." },
        { challenge: "mantener la motivación también en las etapas rutinarias o difíciles, acompañar el entusiasmo con seguimiento y reconocer que las personas pueden necesitar diferentes formas de apoyo." },
      ]},
      { title: "3. ¿Cómo se comporta en el entorno laboral?", blocks: [
        { p: "En el trabajo, el perfil Amarillo suele destacar en situaciones que requieren comunicación, creatividad, interacción y capacidad para generar compromiso. Puede convertirse en una persona clave para impulsar iniciativas, conectar equipos y crear un entorno en el que las personas se sientan animadas a participar." },
        { p: "Suele aportar valor en situaciones como:" },
        { ul: [
          "Presentar ideas, comunicar proyectos y hablar ante grupos.",
          "Generar propuestas creativas y explorar nuevas oportunidades.",
          "Motivar a los equipos frente a objetivos compartidos.",
          "Construir relaciones con clientes, compañeros y aliados.",
          "Facilitar la integración de personas y promover la colaboración.",
          "Gestionar conversaciones que requieren persuasión, entusiasmo y capacidad para generar acuerdos.",
        ]},
        { p: "Para dar lo mejor de sí, necesita espacios donde pueda interactuar, expresar sus ideas, participar en iniciativas dinámicas y recibir retroalimentación sobre sus contribuciones." },
      ]},
      { title: "4. ¿Cómo se comunica el perfil Amarillo?", blocks: [
        { p: "La comunicación de una persona con predominancia Amarilla suele ser expresiva, cercana, entusiasta y orientada a las relaciones. Generalmente disfruta compartir ideas, conversar sobre posibilidades y conocer la opinión de los demás." },
        { p: "Puede utilizar anécdotas, ejemplos, humor y expresiones emocionales para transmitir sus mensajes. Valora los ambientes donde existe apertura para dialogar y donde sus ideas reciben atención." },
        { p: "Para comunicarse eficazmente con este perfil, conviene:" },
        { ul: [
          "Mostrar interés genuino por sus ideas y propuestas.",
          "Mantener una conversación dinámica, cercana y participativa.",
          "Explicar cómo una propuesta puede beneficiar a las personas o generar nuevas oportunidades.",
          "Dar espacio para compartir opiniones y explorar alternativas.",
          "Acordar compromisos, responsables y plazos de manera explícita.",
          "Resumir los acuerdos importantes para asegurar que las ideas se traduzcan en acciones concretas.",
        ]},
        { p: "Es importante recordar que su expresividad no significa necesariamente superficialidad, ni su entusiasmo implica falta de seriedad. Muchas veces, utiliza la interacción social como una vía para pensar, crear y construir soluciones." },
        { p: "Sin embargo, su preferencia por la conversación y las posibilidades puede resultar excesiva para personas que necesitan mensajes breves, información precisa o tiempo para analizar. Por ello, desarrollar flexibilidad comunicativa es fundamental." },
      ]},
      { title: "5. Principales fortalezas y oportunidades de desarrollo", blocks: [
        { sub: "Fortalezas que puede potenciar" },
        { ul: [
          "Facilidad para comunicar e intercambiar ideas.",
          "Creatividad y pensamiento innovador.",
          "Entusiasmo y energía para impulsar iniciativas.",
          "Espontaneidad y flexibilidad.",
          "Habilidad para relacionarse con diferentes personas.",
          "Capacidad para persuadir y generar compromiso.",
          "Talento para motivar y fortalecer el ambiente del equipo.",
        ]},
        { sub: "Oportunidades para crecer" },
        { ul: [
          "Escuchar activamente y evitar interrumpir.",
          "Organizar las ideas y comunicar los mensajes de forma estructurada.",
          "Priorizar tareas y administrar mejor el tiempo.",
          "Mantener la concentración hasta completar los proyectos.",
          "Dar seguimiento a los compromisos y cumplir los plazos.",
          "Incorporar datos, análisis y planificación a las ideas creativas.",
          "Aprender a abordar conversaciones difíciles de manera directa y constructiva.",
        ]},
      ]},
      { title: "6. Recomendaciones para su desarrollo personal y profesional", blocks: [
        { p: "Para potenciar su efectividad, la persona con predominancia Amarilla puede trabajar en tres áreas fundamentales:" },
        { sub: "1. Transformar las ideas en resultados." },
        { p: "Antes de iniciar un proyecto, definir el objetivo, las acciones prioritarias, los responsables y las fechas de cumplimiento. Utilizar listas de seguimiento puede ayudarle a mantener el enfoque y cerrar los ciclos de trabajo." },
        { sub: "2. Escuchar para comprender, no solamente para responder." },
        { p: "Practicar preguntas abiertas, permitir que los demás terminen sus ideas y verificar la comprensión antes de presentar una propuesta. Esto fortalece la confianza y permite construir soluciones que integren diferentes perspectivas." },
        { sub: "3. Equilibrar el entusiasmo con la estructura." },
        { p: "Conservar su creatividad y energía, incorporando espacios de planificación, evaluación y seguimiento. No se trata de reducir su espontaneidad, sino de convertir sus ideas en acciones sostenibles y resultados concretos." },
      ]},
      { title: "7. Reflexión final", blocks: [
        { p: "El perfil Amarillo representa la fuerza de la comunicación, la creatividad y la conexión humana. Su capacidad para entusiasmar, persuadir y establecer relaciones puede convertirse en una contribución importante para cualquier equipo u organización." },
        { p: "Su mayor oportunidad de crecimiento consiste en comprender que inspirar a las personas es un gran comienzo, pero generar confianza y resultados sostenibles requiere también escuchar, cumplir los compromisos y mantener el enfoque." },
        { p: "El verdadero desarrollo de este perfil no consiste en perder su entusiasmo, espontaneidad o expresividad, sino en aprender a utilizarlos de manera consciente y flexible, adaptándose a las necesidades de cada persona y situación." },
        { question: "¿Cómo puedo aprovechar mi creatividad, mi energía y mi capacidad para conectar con las personas para inspirar a otros y, al mismo tiempo, convertir mis ideas en resultados concretos?" },
      ]},
    ],
  },

  S: {
    title: "Perfil Verde — El Estable",
    sections: [
      { title: "1. Descripción general del perfil", blocks: [
        { p: "Las personas con predominancia del estilo Verde en la metodología DISC se caracterizan por su tranquilidad, empatía, lealtad y disposición para colaborar con los demás. Suelen valorar las relaciones cercanas, la estabilidad y los ambientes donde existe confianza, respeto y cooperación." },
        { p: "Su principal motivación es construir relaciones armoniosas, contribuir al bienestar de las personas y formar parte de un entorno estable y colaborativo. Prefieren trabajar en ambientes donde puedan desarrollar vínculos de confianza, comprender las necesidades de los demás y aportar de manera constante al logro de objetivos compartidos." },
        { p: "Generalmente, son personas pacientes, accesibles y dispuestas a brindar apoyo. Su presencia puede aportar equilibrio a los equipos, especialmente en situaciones de tensión o cambio, gracias a su capacidad para escuchar, mediar y favorecer la convivencia." },
        { p: "Su fortaleza no siempre se manifiesta mediante grandes discursos o decisiones rápidas, sino a través de la constancia, la cercanía y la disposición para estar presentes cuando otras personas necesitan apoyo." },
      ]},
      { title: "2. Características principales", blocks: [
        { sub: "Diplomático" },
        { p: "Tiene facilidad para manejar las relaciones interpersonales con tacto, prudencia y consideración. Procura comprender diferentes puntos de vista y encontrar alternativas que permitan mantener una buena relación entre las personas. Generalmente, prefiere resolver los desacuerdos mediante el diálogo antes que recurrir a la confrontación." },
        { strength: "facilita la mediación, contribuye a resolver conflictos y promueve un ambiente de respeto y entendimiento." },
        { challenge: "aprender a expresar desacuerdos de manera clara y oportuna, comprendiendo que mantener una buena relación no significa evitar todas las conversaciones difíciles." },
        { sub: "Leal" },
        { p: "Valora los vínculos que construye y suele demostrar compromiso con las personas, los equipos y las organizaciones con las que se identifica. Cuando establece una relación de confianza, tiende a mantenerla y a brindar apoyo de manera constante." },
        { strength: "genera sentido de pertenencia, compromiso y continuidad en las relaciones de trabajo." },
        { challenge: "aprender a establecer límites saludables y reconocer que la lealtad también implica expresar opiniones honestas, cuestionar decisiones inadecuadas y aceptar que algunas relaciones o circunstancias necesitan cambiar." },
        { sub: "Solidario" },
        { p: "Muestra sensibilidad ante las necesidades de los demás y disposición para colaborar cuando alguien requiere ayuda. Puede detectar cuándo una persona atraviesa una dificultad y ofrecer acompañamiento, apoyo práctico o una palabra de aliento." },
        { strength: "fortalece la colaboración, fomenta la empatía y contribuye a crear un ambiente donde las personas se sienten respaldadas." },
        { challenge: "evitar asumir responsabilidades que corresponden a otros, aprender a decir que no cuando sea necesario y cuidar su propio bienestar mientras ayuda a los demás." },
        { sub: "Confiable" },
        { p: "Suele transmitir seguridad a través de su constancia, responsabilidad y disposición para cumplir los compromisos adquiridos. Las personas de su entorno pueden percibirlo como alguien en quien apoyarse, especialmente cuando necesitan estabilidad, escucha y seguimiento." },
        { strength: "construye relaciones sólidas, favorece la confianza dentro del equipo y aporta continuidad a los procesos." },
        { challenge: "comunicar oportunamente cuando no puede cumplir una expectativa, pedir ayuda cuando la necesita y adaptarse a situaciones que requieren modificar los planes establecidos." },
        { sub: "Cooperador" },
        { p: "Disfruta trabajar con otras personas y contribuir al logro de objetivos comunes. Generalmente, está dispuesto a escuchar propuestas, compartir responsabilidades y buscar soluciones que beneficien al grupo. Prefiere los entornos donde existe colaboración y las personas se tratan con respeto." },
        { strength: "promueve el trabajo en equipo, facilita la integración y contribuye a mantener relaciones laborales constructivas." },
        { challenge: "desarrollar mayor iniciativa para expresar sus propias ideas, asumir posiciones cuando sea necesario y evitar ceder constantemente para mantener la armonía." },
        { sub: "Emotivo" },
        { p: "Suele reconocer y experimentar con intensidad las emociones vinculadas a sus relaciones y experiencias. Puede mostrar sensibilidad ante el ambiente, las necesidades de las personas y los cambios que afectan al equipo. Esta sensibilidad puede ayudarle a comprender cómo se sienten los demás y a responder con consideración." },
        { strength: "aporta empatía, sensibilidad interpersonal y capacidad para reconocer el impacto emocional de las situaciones." },
        { challenge: "aprender a gestionar sus emociones en momentos de tensión, separar los hechos de las interpretaciones y expresar sus necesidades sin asumir como propias todas las preocupaciones de los demás." },
        { sub: "Carisma" },
        { p: "Puede generar cercanía y simpatía a través de su calidez, autenticidad y manera de relacionarse. Su capacidad para escuchar, transmitir interés genuino y hacer que otras personas se sientan aceptadas puede facilitar la construcción de vínculos significativos." },
        { strength: "genera confianza, favorece la integración y contribuye a crear relaciones positivas y duraderas." },
        { challenge: "utilizar su capacidad de conectar con los demás para expresar también sus propias ideas, influir de manera constructiva y asumir conversaciones que pueden resultar incómodas." },
      ]},
      { title: "3. ¿Cómo se comporta en el entorno laboral?", blocks: [
        { p: "En el trabajo, el perfil Verde suele destacar en situaciones que requieren cooperación, escucha, paciencia y construcción de relaciones de confianza. Puede convertirse en una figura de apoyo para sus compañeros y contribuir a que el equipo funcione de manera más estable y armoniosa." },
        { p: "Suele aportar valor en situaciones como:" },
        { ul: [
          "Acompañar e integrar a personas nuevas en un equipo.",
          "Escuchar las inquietudes de los compañeros y ofrecer apoyo.",
          "Facilitar la colaboración entre personas con diferentes perspectivas.",
          "Mantener la constancia y el seguimiento de las responsabilidades.",
          "Contribuir a resolver desacuerdos mediante el diálogo.",
          "Generar confianza y favorecer un ambiente de trabajo respetuoso.",
          "Brindar estabilidad al equipo durante períodos de presión o incertidumbre.",
        ]},
        { p: "Para dar lo mejor de sí, necesita relaciones basadas en la confianza, expectativas claras, un ambiente respetuoso y tiempo suficiente para adaptarse a los cambios que afectan su forma de trabajar." },
      ]},
      { title: "4. ¿Cómo se comunica el perfil Verde?", blocks: [
        { p: "La comunicación de una persona con predominancia Verde suele ser tranquila, cercana, considerada y orientada a las relaciones. Generalmente, prefiere conversar en un ambiente de confianza, donde pueda expresar sus opiniones sin sentirse presionada o expuesta a confrontaciones innecesarias." },
        { p: "Tiende a escuchar antes de responder y puede prestar especial atención al tono de voz, las emociones y las necesidades de quienes participan en una conversación." },
        { p: "Para comunicarse eficazmente con este perfil, conviene:" },
        { ul: [
          "Escuchar con atención y demostrar interés genuino.",
          "Expresar las ideas con respeto, paciencia y claridad.",
          "Evitar presionarlo para tomar decisiones inmediatas cuando necesita analizar el impacto del cambio.",
          "Explicar las razones de las decisiones y cómo afectarán al equipo.",
          "Ofrecer retroalimentación de forma privada, constructiva y específica.",
          "Invitarlo a expresar sus opiniones y necesidades.",
          "Reconocer sus aportes y el valor de su colaboración.",
        ]},
        { p: "Es importante recordar que su tranquilidad no significa falta de iniciativa, ni su disposición para cooperar implica que siempre esté de acuerdo. En ocasiones, puede guardar silencio para evitar un conflicto, aunque tenga inquietudes o desacuerdos que sería importante conocer." },
        { p: "Por eso, crear espacios de confianza donde pueda expresarse con libertad favorece una comunicación más honesta y efectiva." },
      ]},
      { title: "5. Principales fortalezas y oportunidades de desarrollo", blocks: [
        { sub: "Fortalezas que puede potenciar" },
        { ul: [
          "Capacidad para construir relaciones de confianza.",
          "Lealtad y compromiso con el equipo.",
          "Empatía y sensibilidad hacia las necesidades de los demás.",
          "Disposición para cooperar y brindar apoyo.",
          "Paciencia y constancia en el trabajo.",
          "Habilidad para mediar y favorecer la armonía.",
          "Cercanía y calidez en las relaciones interpersonales.",
        ]},
        { sub: "Oportunidades para crecer" },
        { ul: [
          "Expresar desacuerdos de manera directa y respetuosa.",
          "Desarrollar mayor seguridad al tomar decisiones.",
          "Adaptarse con mayor flexibilidad a los cambios.",
          "Establecer límites y evitar asumir problemas ajenos.",
          "Comunicar sus propias necesidades y expectativas.",
          "Aprender a manejar los conflictos sin evitarlos.",
          "Tomar la iniciativa y asumir responsabilidades que impliquen salir de su zona de comodidad.",
        ]},
      ]},
      { title: "6. Recomendaciones para su desarrollo personal y profesional", blocks: [
        { p: "Para potenciar su efectividad, la persona con predominancia Verde puede trabajar en tres áreas fundamentales:" },
        { sub: "1. Practicar la asertividad." },
        { p: "Expresar sus opiniones, necesidades y desacuerdos con respeto, sin minimizar su importancia para evitar incomodar a los demás. Puede comenzar utilizando frases como: «Comprendo tu punto de vista; sin embargo, considero importante revisar otra alternativa» o «Necesito expresar una inquietud antes de que tomemos esta decisión»." },
        { sub: "2. Desarrollar confianza frente al cambio." },
        { p: "Comprender que los cambios no necesariamente amenazan la estabilidad o las relaciones. Solicitar información, identificar los aspectos que puede controlar y reconocer los beneficios de nuevas formas de trabajar puede ayudarle a transitar las transiciones con mayor seguridad." },
        { sub: "3. Equilibrar el apoyo a los demás con el autocuidado." },
        { p: "Continuar siendo una persona solidaria sin asumir todas las responsabilidades del equipo. Aprender a delegar, establecer límites y pedir ayuda cuando la necesita le permitirá mantener su capacidad de apoyo sin comprometer sus propias necesidades." },
      ]},
      { title: "7. Reflexión final", blocks: [
        { p: "El perfil Verde representa la fuerza de la confianza, la cooperación y la conexión humana. Su capacidad para escuchar, acompañar y construir relaciones estables puede convertirse en una contribución fundamental para cualquier equipo u organización." },
        { p: "Su mayor oportunidad de crecimiento consiste en comprender que cuidar las relaciones no significa evitar los conflictos, sino tener la confianza suficiente para expresar lo que piensa, establecer límites y contribuir a soluciones que beneficien a todos." },
        { p: "El verdadero desarrollo de este perfil no consiste en perder su sensibilidad, lealtad o disposición para ayudar, sino en aprender a equilibrarlas con la asertividad, la autonomía y la capacidad de adaptarse a nuevas circunstancias." },
        { question: "¿Cómo puedo seguir siendo una persona cercana, solidaria y confiable, mientras aprendo a expresar mis necesidades, defender mis ideas y afrontar los cambios con mayor seguridad?" },
      ]},
    ],
  },

  C: {
    title: "Perfil Azul — El CONTROL",
    sections: [
      { title: "1. Descripción general del perfil", blocks: [
        { p: "Las personas con predominancia del estilo Azul en la metodología DISC se caracterizan por su pensamiento analítico, su atención al detalle y su orientación hacia la calidad, la precisión y el cumplimiento de los procedimientos. Suelen abordar las situaciones de manera lógica y estructurada, procurando comprender los hechos antes de tomar decisiones." },
        { p: "Su principal motivación es hacer las cosas correctamente, reducir los errores y alcanzar resultados confiables mediante el análisis, la planificación y el cumplimiento de estándares. Valoran la información precisa, los criterios objetivos y los procesos que les permiten trabajar con orden y consistencia." },
        { p: "Generalmente, prefieren comprender qué se espera de ellas, cuáles son las reglas que deben seguir y qué criterios se utilizarán para evaluar el resultado. Su capacidad para identificar inconsistencias, analizar riesgos y mantener altos estándares de calidad puede convertirse en una contribución importante para cualquier equipo u organización." },
        { p: "Su fortaleza no siempre se manifiesta en la rapidez con la que actúan, sino en la profundidad de su análisis, el cuidado con el que ejecutan sus tareas y su compromiso con hacer un trabajo bien realizado." },
      ]},
      { title: "2. Características principales", blocks: [
        { sub: "Analítico" },
        { p: "Tiene una marcada inclinación a examinar la información, identificar relaciones entre los hechos y comprender las causas de los problemas antes de proponer soluciones. Prefiere fundamentar sus decisiones en argumentos verificables y evaluar diferentes alternativas antes de elegir un camino." },
        { strength: "identifica riesgos, detecta inconsistencias y contribuye a tomar decisiones fundamentadas." },
        { challenge: "reconocer cuándo dispone de información suficiente para actuar, evitando prolongar innecesariamente el análisis por buscar una certeza absoluta." },
        { sub: "Organizado" },
        { p: "Prefiere trabajar con estructura, planificación y claridad en las prioridades. Suele establecer métodos para ordenar la información, administrar los recursos y dar seguimiento a sus responsabilidades. Un entorno organizado le permite mantener el control sobre sus tareas y reducir la posibilidad de cometer errores." },
        { strength: "facilita la planificación, mejora el seguimiento de las actividades y contribuye a mantener procesos ordenados." },
        { challenge: "desarrollar flexibilidad cuando las prioridades cambian y comprender que, en algunas situaciones, es necesario reorganizar los planes sobre la marcha." },
        { sub: "Minucioso" },
        { p: "Presta atención a los detalles y procura revisar cuidadosamente la información y los resultados de su trabajo. Puede detectar pequeños errores, omisiones o inconsistencias que otras personas podrían pasar por alto. Tiende a valorar la calidad de la ejecución y la posibilidad de verificar que cada elemento cumpla con lo esperado." },
        { strength: "contribuye a prevenir errores, mejorar la calidad y mantener altos estándares de trabajo." },
        { challenge: "distinguir entre los detalles que realmente afectan el resultado y aquellos que tienen menor importancia, evitando invertir demasiado tiempo en aspectos secundarios." },
        { sub: "Lógico y orientado a los datos" },
        { p: "Prefiere comprender las situaciones mediante hechos, evidencias, cifras y argumentos coherentes. Suele sentirse más cómodo cuando puede verificar la información y establecer conclusiones basadas en criterios objetivos, en lugar de depender exclusivamente de intuiciones o impresiones personales." },
        { strength: "aporta objetividad, pensamiento crítico y capacidad para sustentar las decisiones." },
        { challenge: "reconocer que la experiencia humana, las emociones y el contexto también pueden aportar información relevante, especialmente cuando las decisiones afectan a otras personas." },
        { sub: "Preciso" },
        { p: "Procura expresarse y trabajar con exactitud. Valora que las instrucciones sean claras, que los datos sean correctos y que los resultados respondan a los criterios establecidos. Puede prestar especial atención al uso adecuado de los términos, las cifras, los plazos y las especificaciones." },
        { strength: "mejora la claridad, reduce las ambigüedades y favorece la confiabilidad de los resultados." },
        { challenge: "adaptar su nivel de detalle a las necesidades de cada situación, evitando que la búsqueda de exactitud dificulte la comunicación ágil o la toma de decisiones oportunas." },
        { sub: "Sistemático" },
        { p: "Tiende a seguir una secuencia lógica para desarrollar sus actividades. Prefiere comprender los pasos de un proceso, identificar las variables relevantes y trabajar mediante métodos que permitan obtener resultados consistentes y reproducibles." },
        { strength: "facilita la estandarización, la continuidad de los procesos y la identificación de oportunidades de mejora." },
        { challenge: "reconocer cuándo un método establecido necesita actualizarse y estar dispuesto a explorar alternativas cuando las circunstancias cambian." },
        { sub: "Orientado al control" },
        { p: "Valora la posibilidad de verificar que las actividades se desarrollen conforme a lo previsto. Puede establecer mecanismos de revisión, comprobar resultados y supervisar el cumplimiento de los estándares definidos. Esta tendencia suele estar relacionada con su interés por reducir riesgos y mantener la calidad." },
        { strength: "favorece el seguimiento, la prevención de errores y el cumplimiento de los criterios establecidos." },
        { challenge: "evitar que la necesidad de verificar cada detalle limite la autonomía de otras personas o genere dificultades para delegar. Aprender a distinguir entre los controles indispensables y los innecesarios le permitirá trabajar con mayor eficiencia." },
        { sub: "Apegado al procedimiento" },
        { p: "Suele valorar las normas, las instrucciones y los procesos definidos, especialmente cuando garantizan seguridad, calidad, equidad o cumplimiento. Prefiere conocer las reglas antes de actuar y comprender las razones que sustentan una determinada forma de trabajar." },
        { strength: "promueve la consistencia, la trazabilidad y el cumplimiento de los estándares organizacionales." },
        { challenge: "desarrollar criterio para identificar cuándo un procedimiento necesita revisarse, proponer mejoras y adaptarse a situaciones excepcionales sin perder de vista los objetivos ni los requisitos fundamentales." },
      ]},
      { title: "3. ¿Cómo se comporta en el entorno laboral?", blocks: [
        { p: "En el trabajo, el perfil Azul suele destacar en actividades que requieren análisis, precisión, planificación y cumplimiento de estándares. Puede convertirse en una persona clave para asegurar la calidad de los resultados, identificar riesgos y mejorar la confiabilidad de los procesos." },
        { p: "Suele aportar valor en situaciones como:" },
        { ul: [
          "Analizar información antes de tomar decisiones.",
          "Revisar documentos, cifras, datos y resultados.",
          "Identificar errores, inconsistencias y posibles riesgos.",
          "Diseñar procedimientos, controles y métodos de trabajo.",
          "Organizar información y estructurar planes de acción.",
          "Verificar el cumplimiento de normas y estándares de calidad.",
          "Documentar procesos y mantener registros confiables.",
          "Evaluar alternativas mediante criterios objetivos.",
        ]},
        { p: "Para dar lo mejor de sí, necesita objetivos claros, información suficiente, criterios de calidad definidos y tiempo razonable para analizar y ejecutar sus responsabilidades." },
      ]},
      { title: "4. ¿Cómo se comunica el perfil Azul?", blocks: [
        { p: "La comunicación de una persona con predominancia Azul suele ser cuidadosa, estructurada, objetiva y orientada a la precisión. Generalmente, prefiere comprender los hechos, revisar los argumentos y contar con información suficiente antes de emitir una opinión o comprometerse con una decisión." },
        { p: "Puede formular preguntas detalladas para asegurarse de que comprende correctamente una situación. Esto no necesariamente refleja desconfianza, sino su interés por reducir las ambigüedades y tomar decisiones fundamentadas." },
        { p: "Para comunicarse eficazmente con este perfil, conviene:" },
        { ul: [
          "Presentar información clara, organizada y verificable.",
          "Explicar los procedimientos, criterios y expectativas.",
          "Utilizar datos, ejemplos concretos y argumentos coherentes.",
          "Dar tiempo para revisar información y evaluar alternativas.",
          "Evitar presionarlo para responder sin contar con los elementos necesarios.",
          "Definir con precisión las responsabilidades, los plazos y los estándares esperados.",
          "Explicar las razones de los cambios y cómo se implementarán.",
          "Diferenciar los hechos comprobables de las opiniones o suposiciones.",
        ]},
        { p: "Es importante recordar que su necesidad de precisión no significa necesariamente desconfianza hacia los demás, ni su preferencia por los procedimientos implica falta de creatividad. Con frecuencia, busca comprender cómo garantizar que una decisión sea correcta y que sus resultados puedan sostenerse en el tiempo." },
        { p: "Sin embargo, su comunicación detallada puede resultar excesiva para personas que prefieren mensajes breves y decisiones rápidas. Por eso, desarrollar flexibilidad para adaptar la profundidad de sus explicaciones al contexto es fundamental." },
      ]},
      { title: "5. Principales fortalezas y oportunidades de desarrollo", blocks: [
        { sub: "Fortalezas que puede potenciar" },
        { ul: [
          "Pensamiento analítico y crítico.",
          "Capacidad para trabajar con precisión.",
          "Organización y planificación.",
          "Atención a los detalles.",
          "Orientación a la calidad y la mejora continua.",
          "Toma de decisiones fundamentada en datos.",
          "Capacidad para identificar riesgos y prevenir errores.",
          "Disciplina para seguir métodos y procedimientos.",
          "Compromiso con la confiabilidad de los resultados.",
        ]},
        { sub: "Oportunidades para crecer" },
        { ul: [
          "Tomar decisiones cuando la información disponible sea suficiente, aunque no sea perfecta.",
          "Priorizar las tareas según su impacto y urgencia.",
          "Aceptar cambios y ajustar los procedimientos cuando sea necesario.",
          "Evitar que el perfeccionismo retrase la entrega de resultados.",
          "Delegar responsabilidades sin intentar controlar cada detalle.",
          "Comunicar conclusiones de manera breve y comprensible.",
          "Incorporar las perspectivas emocionales e interpersonales en sus análisis.",
          "Distinguir entre los requisitos indispensables y las preferencias personales.",
          "Aprender a manejar la incertidumbre y los escenarios donde no existe una única respuesta correcta.",
        ]},
      ]},
      { title: "6. Recomendaciones para su desarrollo personal y profesional", blocks: [
        { p: "Para potenciar su efectividad, la persona con predominancia Azul puede trabajar en tres áreas fundamentales:" },
        { sub: "1. Equilibrar la precisión con la agilidad." },
        { p: "Antes de iniciar una tarea, definir qué nivel de calidad requiere el resultado y cuánto tiempo es razonable invertir. Preguntarse: ¿qué información necesito realmente para decidir?, ¿qué consecuencias tendría esperar más?, ¿cuándo es suficiente para avanzar? El objetivo no es reducir la calidad, sino utilizar el tiempo y los recursos de manera inteligente." },
        { sub: "2. Desarrollar flexibilidad ante los cambios." },
        { p: "Comprender que los procedimientos son herramientas para alcanzar objetivos, no necesariamente estructuras inamovibles. Cuando una situación cambia, puede analizar qué principios deben mantenerse, qué aspectos pueden ajustarse y qué nuevas alternativas permitirían mejorar el resultado." },
        { sub: "3. Integrar los datos con las personas." },
        { p: "Mantener su rigor analítico y, al mismo tiempo, considerar cómo las decisiones afectan a quienes deben ejecutarlas o recibir sus resultados. Hacer preguntas como «¿qué impacto tendrá esta decisión en el equipo?» o «¿qué necesitan las personas para implementar este proceso?» puede ampliar su perspectiva y fortalecer su capacidad de colaboración." },
      ]},
      { title: "7. Reflexión final", blocks: [
        { p: "El perfil Azul representa la fuerza del análisis, la precisión y la calidad. Su capacidad para organizar información, identificar riesgos y establecer métodos confiables puede convertirse en una contribución fundamental para cualquier equipo u organización." },
        { p: "Su mayor oportunidad de crecimiento consiste en comprender que hacer las cosas bien también implica saber cuándo avanzar, cuándo adaptarse y cuándo aceptar que una solución suficientemente buena puede ser más valiosa que una solución perfecta que llega demasiado tarde." },
        { p: "El verdadero desarrollo de este perfil no consiste en perder su rigor, su organización o su atención al detalle, sino en aprender a utilizarlos con flexibilidad, equilibrando la calidad con la agilidad y el análisis con la acción." },
        { question: "¿Cómo puedo mantener mis estándares de calidad y precisión, mientras desarrollo mayor flexibilidad para tomar decisiones, adaptarme a los cambios y avanzar sin necesitar tener todas las variables bajo control?" },
      ]},
    ],
  },
};

/**
 * Convierte un informe en HTML. Se usa tanto en la vista previa como en la
 * versión imprimible (PDF). Escapa el texto del participante fuera de aquí.
 */
function renderDiscReportHtml(report) {
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return report.sections.map((section) => {
    const body = section.blocks.map((b) => {
      if (b.sub) return `<h5 class="report-sub">${esc(b.sub)}</h5>`;
      if (b.p) return `<p>${esc(b.p)}</p>`;
      if (b.ul) return `<ul>${b.ul.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
      if (b.strength) return `<p><em>Su fortaleza:</em> ${esc(b.strength)}</p>`;
      if (b.challenge) return `<p><em>Su reto:</em> ${esc(b.challenge)}</p>`;
      if (b.question) return `<p class="report-question"><strong>Pregunta para la reflexión personal:</strong><br><em>${esc(b.question)}</em></p>`;
      return "";
    }).join("");
    return `<section class="report-section"><h4>${esc(section.title)}</h4>${body}</section>`;
  }).join("");
}

/* ==========================================================================
   Gráfico de araña y afinidad entre perfiles
   ========================================================================== */

const DISC_NAMES = {
  D: "El Dominante",
  I: "El Influyente",
  S: "El Estable",
  C: "El Control",
};

const DISC_COLORS = { D: "#DC3838", I: "#EBAA19", S: "#21885A", C: "#2879C7" };

/** Mapa de la cabeza: C arriba a la izquierda, D arriba a la derecha,
 *  I abajo a la derecha y S abajo a la izquierda. */
const DISC_AFFINITY = {
  D: { close: ["C", "I"], opposite: "S" },
  I: { close: ["D", "S"], opposite: "C" },
  S: { close: ["I", "C"], opposite: "D" },
  C: { close: ["S", "D"], opposite: "I" },
};

/** Gráfico de araña con los cuatro totales (escala 0–40 por dimensión). */
function renderDiscRadarSvg(scores) {
  const size = 320;
  const c = size / 2;
  const R = 105;
  const MAX = 40;
  const axes = {
    C: [-1, -1],
    D: [1, -1],
    I: [1, 1],
    S: [-1, 1],
  };
  const order = ["C", "D", "I", "S"];

  const unit = ([x, y]) => {
    const len = Math.hypot(x, y);
    return [x / len, y / len];
  };
  const pointAt = (k, value) => {
    const [dx, dy] = unit(axes[k]);
    const r = (R * value) / MAX;
    return [c + dx * r, c + dy * r];
  };
  const fmt = ([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`;

  const rings = [10, 20, 30, 40]
    .map((v) => {
      const pts = order.map((k) => fmt(pointAt(k, v))).join(" ");
      return `<polygon points="${pts}" fill="none" stroke="#E5E0D6" stroke-width="1"/>`;
    })
    .join("");

  const spokes = order
    .map((k) => {
      const [x, y] = pointAt(k, MAX);
      return `<line x1="${c}" y1="${c}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#E5E0D6" stroke-width="1"/>`;
    })
    .join("");

  const valuePts = order.map((k) => pointAt(k, scores[k] || 0));
  const area = valuePts.map(fmt).join(" ");

  const dots = order
    .map((k, i) => {
      const [x, y] = valuePts[i];
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="${DISC_COLORS[k]}" stroke="#fff" stroke-width="1.5"/>`;
    })
    .join("");

  const labels = order
    .map((k) => {
      const [lx, ly] = pointAt(k, MAX + 14);
      const [vx, vy] = pointAt(k, (scores[k] || 0) + 7);
      return `
        <text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" font-size="16" font-weight="800" fill="${DISC_COLORS[k]}">${k}</text>
        <text x="${vx.toFixed(1)}" y="${vy.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" font-size="12" font-weight="700" fill="#202020">${scores[k] || 0}</text>`;
    })
    .join("");

  const summary = order.map((k) => `${k} ${scores[k] || 0}`).join(", ");

  return `
    <svg class="disc-radar" viewBox="0 0 ${size} ${size}" role="img" aria-label="Gráfico de araña: ${summary}">
      ${rings}
      ${spokes}
      <polygon points="${area}" fill="rgba(184, 134, 43, 0.18)" stroke="#B8862B" stroke-width="2"/>
      ${dots}
      ${labels}
    </svg>`;
}

/** Texto de afinidad para el perfil predominante. */
function renderDiscAffinityHtml(predominant) {
  const a = DISC_AFFINITY[predominant];
  const names = a.close.map((k) => DISC_NAMES[k]).join(" y ");
  return `
    <p><strong>Afinidad natural:</strong> se llevan mejor con ${names}, que son perfiles colindantes y tienen más afinidad natural.</p>
    <p><strong>Diferencias:</strong> el perfil diagonalmente opuesto es ${DISC_NAMES[a.opposite]}. Son más propensos a las diferencias, así que conviene estar atentos a esto.</p>`;
}

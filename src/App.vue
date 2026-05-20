<script setup>
import { ref } from 'vue'
import {
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Home,
  Landmark,
  Lightbulb,
  ListChecks,
  ScrollText,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-vue-next'

const activeView = ref('home')

const navItems = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'strategy', label: 'Estrategias', icon: ListChecks },
  { id: 'thoughts', label: 'Pensamientos', icon: Lightbulb },
]

const supportAreas = [
  'Financiera',
  'Espiritual',
  'Familia',
  'Emocional',
  'Física',
  'Trabajo',
  'Ciudadana',
  'Intelectual',
  'Sociocultural',
]

const principles = [
  {
    title: 'Responsabilidad',
    text: 'Cumpliré con la cantidad de ahorro propuesta, sin excusas ni posponer mis compromisos financieros.',
  },
  {
    title: 'Disciplina',
    text: 'Aplicaré métodos de control para monitorear mis gastos y llevar un registro diario de mis decisiones.',
  },
  {
    title: 'Moderación',
    text: 'Evitaré gastos innecesarios y controlaré las compras compulsivas antes de adquirir algo.',
  },
  {
    title: 'Auto-control',
    text: 'Me mantendré enfocado en mi meta para actuar alineado con lo que quiero lograr.',
  },
]

const values = [
  {
    title: 'Gratitud',
    text: 'Valoraré lo que ya poseo y mantendré una actitud de agradecimiento, evitando enfocarme en lo que me falta.',
  },
  {
    title: 'Paciencia',
    text: 'Comprenderé que los resultados requieren tiempo y confiaré en el esfuerzo diario.',
  },
  {
    title: 'Optimismo',
    text: 'Mantendré una actitud positiva ante las dificultades, sin rendirme cuando algo no salga como espero.',
  },
  {
    title: 'Voluntad',
    text: 'Actuaré con perseverancia y determinación para que los cambios sean duraderos.',
  },
]

const evaluationItems = [
  'Aumenté en 10% el monto en mi cuenta de ahorro.',
  'Identifiqué las áreas donde he estado gastando más dinero.',
  'Definí categorías de gastos adaptadas a mi vida actual.',
  'Llevé registro de los gastos realizados durante abril de 2026.',
  'Llevé registro de los gastos realizados durante mayo de 2026.',
  'Preparé una primera versión de mi presupuesto basado en mis resultados de gastos.',
]

const goals = [
  {
    term: 'Corto plazo',
    goal: 'Mejorar los hábitos de ahorro y control financiero mediante un registro más ordenado de gastos e ingresos.',
    strengths:
      'Adaptación, creatividad, pensamiento analítico y deseo constante de superación personal y profesional.',
    weaknesses:
      'Reducir gastos impulsivos, mejorar la organización financiera y equilibrar trabajo con descanso.',
    principles: 'Responsabilidad, disciplina, moderación y autocontrol.',
  },
  {
    term: 'Mediano plazo',
    goal: 'Lograr mayor estabilidad económica, crear un fondo de ahorro y desarrollar proyectos tecnológicos propios.',
    strengths:
      'Persistencia, aprendizaje rápido y experiencia técnica en desarrollo de software.',
    weaknesses:
      'Controlar el agotamiento, organizar mejor el tiempo y manejar la presión financiera.',
    principles: 'Paciencia, optimismo, perseverancia y constancia.',
  },
  {
    term: 'Largo plazo',
    goal: 'Fundar una empresa de experiencias educativas interactivas que combine tecnología, música y creatividad.',
    strengths:
      'Visión creativa, innovación, motivación para emprender y crecimiento continuo.',
    weaknesses:
      'Superar un mercado competitivo, evitar la dispersión y mejorar la administración financiera.',
    principles: 'Liderazgo, planificación, perseverancia y responsabilidad.',
  },
]

const strategies = [
  {
    term: 'Corto plazo',
    goal: goals[0].goal,
    reach: 'Registrar gastos, separar ahorro fijo y revisar semanalmente el uso del dinero.',
    overcome: 'Reducir compras impulsivas, evitar gastos innecesarios y ordenar prioridades.',
    solve: 'Ajustar el presupuesto mensual, eliminar gastos pequeños repetidos y comprar solo lo necesario.',
  },
  {
    term: 'Mediano plazo',
    goal: goals[1].goal,
    reach: 'Mantener ahorro constante, organizar ingresos y apartar dinero para metas importantes.',
    overcome: 'Controlar la presión financiera, evitar deudas innecesarias y mejorar la administración.',
    solve: 'Revisar gastos cada mes, buscar mejores ingresos y proteger el ahorro de compras impulsivas.',
  },
  {
    term: 'Largo plazo',
    goal: goals[2].goal,
    reach: 'Planificar capital, fortalecer disciplina financiera y preparar un fondo para inversión.',
    overcome: 'Evitar dispersarse en demasiados proyectos y mantener constancia en el ahorro.',
    solve: 'Crear un plan financiero, iniciar con proyectos pequeños y cuidar que los gastos no superen ingresos.',
  },
]

const timeline = [
  ['Abril 2026', 'Revisar ingresos y gastos actuales para conocer la situación financiera real.'],
  ['Mayo 2026', 'Registrar semanalmente gastos personales, académicos y laborales.'],
  ['Junio 2026', 'Clasificar gastos entre necesarios, variables e innecesarios.'],
  ['Julio 2026', 'Elaborar un presupuesto mensual básico.'],
  ['Agosto 2026', 'Establecer un monto mínimo de ahorro mensual.'],
  ['Septiembre 2026', 'Reducir compras impulsivas relacionadas con tecnología o entretenimiento.'],
  ['Octubre 2026', 'Revisar suscripciones, pagos pequeños y gastos repetidos.'],
  ['Noviembre 2026', 'Crear un fondo separado para ahorro personal y proyectos futuros.'],
  ['Enero 2027', 'Evaluar cada mes el cumplimiento del presupuesto y ajustar gastos.'],
  ['Abril 2027', 'Mantener una rutina de control financiero antes de compras importantes.'],
  ['Enero 2028', 'Consolidar un fondo de emergencia para gastos básicos.'],
  ['Octubre 2028', 'Organizar un presupuesto anual con estudio, proyectos, música y ahorro.'],
  ['Enero 2029', 'Destinar ahorro al desarrollo de proyectos tecnológicos o creativos propios.'],
  ['Mayo 2030', 'Alcanzar estabilidad financiera para invertir con mayor seguridad.'],
  ['Abril 2031', 'Preparar la base económica para una empresa sostenible de tecnología, música y educación interactiva.'],
]

const thoughts = [
  {
    source: 'Visión, misión y área de enfoque',
    verse: '8.14',
    text: 'Toda empresa tiene por fundamento planes sensatos, se fortalece mediante el sentido común, y prospera manteniéndose al día en todo.',
  },
  {
    source: 'Principios y valores',
    verse: '16.14',
    text: 'El sabio ahorra para el futuro, pero el necio derrocha cuando obtiene.',
  },
  {
    source: 'Áreas de apoyo',
    verse: '12.9',
    text: 'El hombre bueno hace triunfar su causa por la lógica de sus argumentos; el mal intencionado lo único que quiere es reñir.',
  },
  {
    source: 'Metas',
    verse: '19.18',
    text: 'El perezoso ni siquiera adoba los animales que caza; el hombre diligente aprovecha cuanto encuentra.',
  },
  {
    source: 'Estrategias',
    verse: '8.14',
    text: 'Toda empresa tiene por fundamento planes sensatos, se fortalece mediante el sentido común, y prospera manteniéndose al día en todo.',
  },
  {
    source: 'Cronograma',
    verse: '12.5',
    text: 'La mente del bueno está llena de pensamientos honorables; el malo tiene la cabeza llena de engaños.',
  },
  {
    source: 'Evaluación del proyecto',
    verse: '7.16',
    text: 'El trabajo intenso da prosperidad, la vida regalona lleva a la pobreza.',
  },
]
</script>

<template>
  <div class="app-shell">
    <aside class="side-nav" aria-label="Navegación principal">
      <div class="brand-mark" aria-hidden="true">A</div>

      <nav>
        <button
          v-for="item in navItems"
          :key="item.id"
          class="nav-button"
          :class="{ active: activeView === item.id }"
          :aria-label="item.label"
          :data-tooltip="item.label"
          type="button"
          @click="activeView = item.id"
        >
          <component :is="item.icon" :size="25" stroke-width="2.25" />
        </button>
      </nav>
    </aside>

    <main class="content-area">
      <section v-if="activeView === 'home'" class="view-stack">
        <article class="hero-panel">
          <div class="hero-copy">
            <p class="eyebrow">VIP | Amilcar Estuardo Villela Torres</p>
            <h1>Estabilidad financiera para crecer, emprender y crear futuro.</h1>
            <div class="mission-grid">
              <div>
                <span>Visión</span>
                <p>
                  Ser una persona financieramente estable, disciplinada y responsable, capaz de
                  administrar mejor mis ingresos, controlar mis gastos y ahorrar con constancia.
                </p>
              </div>
              <div>
                <span>Misión</span>
                <p>
                  Fortalecer mi área financiera mediante responsabilidad, disciplina, moderación y
                  autocontrol, evitando gastos innecesarios para alcanzar estabilidad económica.
                </p>
              </div>
            </div>
          </div>
          <div class="hero-metric" aria-label="Área de enfoque">
            <CircleDollarSign :size="44" stroke-width="2" />
            <span>Área de enfoque</span>
            <strong>Financiera</strong>
          </div>
        </article>

        <div class="home-grid">
          <article class="panel">
            <div class="section-heading">
              <Landmark :size="34" stroke-width="1.9" />
              <div>
                <p class="eyebrow">Base de apoyo</p>
                <h2>Áreas de apoyo</h2>
              </div>
            </div>

            <ol class="support-list">
              <li v-for="area in supportAreas" :key="area">{{ area }}</li>
            </ol>

            <div class="content-block">
              <h3 class="block-title">Principios</h3>
              <div class="principle-grid">
                <div v-for="principle in principles" :key="principle.title" class="mini-card">
                  <strong>{{ principle.title }}</strong>
                  <p>{{ principle.text }}</p>
                </div>
              </div>
            </div>

            <div class="content-block">
              <h3 class="block-title">Valores</h3>
              <div class="principle-grid">
                <div v-for="value in values" :key="value.title" class="mini-card value-card">
                  <strong>{{ value.title }}</strong>
                  <p>{{ value.text }}</p>
                </div>
              </div>
            </div>
          </article>

          <article class="panel">
            <div class="section-heading">
              <ListChecks :size="34" stroke-width="1.9" />
              <div>
                <p class="eyebrow">Evaluación del proyecto</p>
                <h2>Objetivos cumplidos</h2>
              </div>
            </div>

            <ul class="check-list">
              <li v-for="item in evaluationItems" :key="item">
                <CheckCircle2 :size="21" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section v-else-if="activeView === 'strategy'" class="view-stack">
        <article class="objective-panel">
          <div>
            <p class="eyebrow">Objetivo de mi visión</p>
            <h1>Prepararme para emprender con tecnología, música y educación interactiva.</h1>
          </div>
          <span class="objective-divider" aria-hidden="true"></span>
          <p>
            Fortalecer mis habilidades profesionales, creativas y financieras para lograr en el
            futuro una empresa enfocada en tecnología, música y desarrollo de experiencias
            educativas interactivas.
          </p>
        </article>

        <article class="panel">
          <div class="section-heading">
            <Target :size="34" stroke-width="1.9" />
            <div>
              <p class="eyebrow">Corto, mediano y largo plazo</p>
              <h2>Metas</h2>
            </div>
          </div>

          <div class="responsive-table">
            <table>
              <thead>
                <tr>
                  <th>Plazo</th>
                  <th>Meta</th>
                  <th>Puntos fuertes</th>
                  <th>Puntos débiles</th>
                  <th>Principios</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="goal in goals" :key="goal.term">
                  <td>{{ goal.term }}</td>
                  <td>{{ goal.goal }}</td>
                  <td>{{ goal.strengths }}</td>
                  <td>{{ goal.weaknesses }}</td>
                  <td>{{ goal.principles }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="panel">
          <div class="section-heading">
            <TrendingUp :size="34" stroke-width="1.9" />
            <div>
              <p class="eyebrow">Metas y acciones</p>
              <h2>ESTRATEGIAS</h2>
            </div>
          </div>

          <div class="strategy-grid">
            <div v-for="strategy in strategies" :key="strategy.term" class="strategy-card">
              <span class="term-label">{{ strategy.term }}</span>
              <section class="strategy-section">
                <h3>Meta de visión</h3>
                <p>{{ strategy.goal }}</p>
              </section>
              <section class="strategy-section strategy-actions">
                <h3>Estrategias</h3>
                <dl>
                  <div>
                    <dt>Para alcanzar metas</dt>
                    <dd>{{ strategy.reach }}</dd>
                  </div>
                  <div>
                    <dt>Para vencer obstáculos</dt>
                    <dd>{{ strategy.overcome }}</dd>
                  </div>
                  <div>
                    <dt>Para solucionar problemas</dt>
                    <dd>{{ strategy.solve }}</dd>
                  </div>
                </dl>
              </section>
            </div>
          </div>
        </article>

        <article class="panel">
          <div class="section-heading">
            <CalendarDays :size="34" stroke-width="1.9" />
            <div>
              <p class="eyebrow">Cronograma</p>
              <h2>Ruta financiera 2026-2031</h2>
            </div>
          </div>

          <ol class="timeline">
            <li v-for="[date, activity] in timeline" :key="`${date}-${activity}`">
              <time>{{ date }}</time>
              <p>{{ activity }}</p>
            </li>
          </ol>
        </article>
      </section>

      <section v-else class="view-stack thoughts-view">
        <article class="thought-hero">
          <ScrollText :size="44" stroke-width="1.85" />
          <div>
            <p class="eyebrow">Pensamientos SpLdH</p>
            <h1>Sabiduría para líderes de hoy</h1>
          </div>
        </article>

        <div class="thought-list">
          <article v-for="thought in thoughts" :key="`${thought.source}-${thought.verse}`" class="thought-card">
            <span>{{ thought.source }}</span>
            <strong>{{ thought.verse }}</strong>
            <p>{{ thought.text }}</p>
            <Sparkles :size="20" aria-hidden="true" />
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

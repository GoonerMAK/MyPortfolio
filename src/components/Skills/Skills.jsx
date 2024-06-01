import uniqid from 'uniqid'
import { skills, languages, frameworks, databases, mlAi } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <h4 className='section__title'>Languages</h4>
      <ul className='skills__list'>
        {languages.map((language) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {language}
          </li>
        ))}
      </ul>

      <br/><br/>

      <h4 className='section__title'>Frameworks & Libraries</h4>
      <ul className='skills__list'>
        {frameworks.map((framework) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {framework}
          </li>
        ))}
      </ul>

      <br/><br/>

      <h4 className='section__title'>Databases</h4>
      <ul className='skills__list'>
        {databases.map((database) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {database}
          </li>
        ))}
      </ul>
      
      <br/><br/>

      <h4 className='section__title'>Machine Learning & AI</h4>
      <ul className='skills__list'>
        {mlAi.map((ml) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {ml}
          </li>
        ))}
      </ul>

      {/* <br/><br/>

      <h4 className='section__title'>Hosting</h4>
      <ul className='skills__list'>
        {mlAi.map((ml) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {ml}
          </li>
        ))}
      </ul> */}

    </section>
  )
}

export default Skills

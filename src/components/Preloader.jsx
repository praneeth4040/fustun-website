import { ICON } from '../config'

export default function Preloader({ done }){
  return (
    <div className={`preloader ${done ? 'out' : ''}`} aria-hidden={!done} aria-label="Loading Fustun">
      <div className="wrap">
        <div className="loader-ring" />
        <img src={ICON} width={28} height={28} alt="Fustun" />
        <div className="label">Fustun</div>
      </div>
    </div>
  )
}

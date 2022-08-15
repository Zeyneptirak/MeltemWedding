import React , {Fragment} from 'react'

const Clock = ({timerDays, timerHours, timerMinutes, timerSeconds})=> {
  return (
    <Fragment>
       < section className="timer-container"> 
        <section className='timer'>
            <div className='clock'>
                <section>
                    <p>{timerDays}</p>
                    <small>Gün</small>
                </section> 
                <span>:</span>
                <section>
                    <p>{timerHours}</p>
                    <small>Saat</small>
                </section>{" "}
                <span>:</span>
                <section>
                    <p>{timerMinutes}</p>
                    <small>Dakika</small>
                </section>{" "}
                <span>:</span>
                <section>
                    <p>{timerSeconds}</p>
                    <small>Saniye</small>
                </section>
            </div>
        </section>
       </section>
    
    </Fragment>
  )
}
Clock.defaultProps={
    timerDays:10,
    timerHours:10,
    timerMinutes:10,
    timerSeconds:10,
}
export default Clock;
import React from 'react'
import News from '../components/News'

function Science(props) {
    // console.log(props.category)
    return (
        <div>
            <News category={props.category}
            pagesize = {props.pagesize}
            set = {props.seProgress}
            />
        </div>
    )
}

export default Science

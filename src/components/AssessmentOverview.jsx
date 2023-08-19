import React from 'react'
import equal from '../image/equal.png'
import link from '../image/link.png'
import user from '../image/user.png'
import globe from '../image/globe.png'
import search from '../image/search.png'
import filter from '../image/filter.png'
import score from '../image/barchart.png'

const AssessmentOverview = () => {
  return (
    <div className='dashboard'>
        <div className="first-row">
        <div className="left-col">
            <h5 className='row-header'>Total Assessment</h5>
            <div className='img-container'>
            <img src={equal} alt="equla sign" /> <span className='count'>34</span>
            </div>
        </div>
        <div className="right-col">
            <h5 className='row-header'>Total Purpose</h5>
            <div className='img-container'>
            <img src={link} alt="link" /> <span className='count'>11</span>
            </div>
        </div>
        </div>
        <div className="second-row">
            <h5 className='row-header'>Candidates</h5>
            <div className="inner-item">
            <img src={user} alt="user profile" />
            <RealatedInfo count={'11,145'} added={'+89'} text={'Total Candidate'} />
            <RealatedInfo count={'1,14'} added={'+89'} text={'Who Attemted'} />
            </div>
        </div>

        <div className="third-row">
            <h5 className='row-header'>Candidates Source</h5>
            <div className="inner-item">
            <img src={globe} alt="user profile" />
            <RealatedInfo count={'11,000'} added={'+89'} text={'E-mail'} />
            <RealatedInfo count={'11,100'} added={'+89'} text={'Social Share'} />
            <RealatedInfo count={'11,150'} added={'+79'} text={'Unique Link'} />
            </div>
        </div>

        <MyAssessment />
    </div>
  )
}


const RealatedInfo = ({count, added, text}) => {
    return (
        <div className='info-container'>
            <span className='count'>{count}</span>
            <span className='small-text'>{added}</span>
            <p>{text}</p>
        </div>
    );
}

const MyAssessment = () => {
    return (
        <div className="myassessment-container">
            <div className="left-text">My Assessment</div>
            <div className="right-icon">
                <div className='bg-of-img'><img src={search} alt="search-icon" /></div>
                <div className='bg-of-img'><img src={filter} alt="filter-icon" /></div>
                <div className='bg-of-img'><img src={score} alt="score-icon" /></div>
            </div>
        </div>
    );
}

export default AssessmentOverview
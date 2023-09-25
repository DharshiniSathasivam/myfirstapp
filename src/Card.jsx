import React from 'react'

function Card(props) {
  return <>
  <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.data.userEnaler?'':'text-muted'}><span className="fa-li"><i className={props.data.userEnaler?"fas fa-check":"fas fa-times"}></i></span>{props.data.user}</li>
              <li className={props.data.StorageEnaler?'':'text-muted'}><span className="fa-li"><i className={props.data.StorageEnaler?"fas fa-check":"fas fa-times"}></i></span>{props.data.Storage}</li>
              <li className={props.data.PublicProjectsEnaler?'':'text-muted'}><span className="fa-li"><i className={props.data.PublicProjectsEnaler?"fas fa-check":"fas fa-times"}></i></span>{props.data.PublicProjects}</li>
              <li className={props.data.CommunityEnaler?'':'text-muted'}><span className="fa-li"><i className={props.data.CommunityEnaler?"fas fa-check":"fas fa-times"}></i></span>{props.data.Community}</li>
              <li className={props.data.PrivateProjectsEnaler?'':'text-muted'}><span className="fa-li"><i className={props.data.PrivateProjectsEnaler?"fas fa-check":"fas fa-times"}></i></span>{props.data.PrivateProjects} </li>
              <li className={props.data.DedicatedEnaler?'':'text-muted'} ><span className="fa-li"><i className={props.data.DedicatedEnaler?"fas fa-check":"fas fa-times"}></i></span>{props.data.Dedicated}
                </li>
              <li className={props.data.SubdomainEnaler?'':'text-muted'}><span className="fa-li"><i className={props.data.SubdomainEnaler?"fas fa-check":"fas fa-times"}></i></span>{props.data.Subdomain}
              </li>
              <li className={props.data.ReportsEnaler?'':'text-muted'}><span className="fa-li"><i className={props.data.ReportsEnaler?"fas fa-check":"fas fa-times"}></i></span>{props.data.Reports}
                </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Card

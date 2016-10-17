import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    getInitialState() {
      return {
        currentVid: this.props.instructors.videos[0],
        modalCover: false
      }
    },
    onHandleClickExpand(e){
      this.setState(
        {
          currentVid: this.props.videos[e.target.id],
          currentVidId: e.target.id,
          modalCover: true
        }
      )
    },
    onHandleClickExitModal(e){
      this.setState(
        {
          modalCover: false
        }
      )
    },
    onHandleClickPrev(e){
      var newVidId = (Number(this.refs.modalVid.id) -1);
      if(newVidId < 0){

      }else{
        this.setState(
          {
            currentVid: this.props.instructors.videos[newVidId],
            currentVidId: newVidId
          }
        )
      }
    },
    onHandleClickNext(e){
      var newVidId = (Number(this.refs.modalVid.id) + 1);
      if(newVidId >= this.props.instructors.videos.length){
      }else{
        this.setState(
          {
            currentVid: this.props.instructors.videos[newVidId],
            currentVidId: newVidId
          }
        )
      }
    },
    render(){
      return(
        <div>
          <section>
            <h3>
              {this.props.instructor.instructor__name}
            </h3>
            {this.props.instructors.map((image, i) =>{
              return <span key={i}>
                <img key={i} id={i} onClick={this.onHandleClickExpand}/ src={`/videos/${techniques.title}`}>
              </span>
            },this)}
          </section>
          <div>
            <h2 onClick={this.onHandleClickExitModal}>X</h2><i className="fa fa-arrow-left fa-2x" onClick={this.onHandleClickPrev}></i>

          </div>
        </div>
      )
    }
  })

import React, { Component } from 'react';
import './ExperienceCard.css';

class ExperienceCard extends Component {
    render() {
        const experience = this.props.experience;
        const index = this.props.index;
        const totalCards = this.props.totalCards;
        return (
          <div className="experience-list-item" style={{ marginTop: (index === 0 ? 30 : 50) }}>
              <div className="experience-card-logo-div">
                <img
                  className="experience-card-logo"
                  src={require(`../../Assets/images/${experience["logo_path"]}`)}
                  alt=""
                />
              </div>
            <div className="experience-card-stepper">
              <div style={{ width: 20, height: 20, borderRadius: 50, zIndex: 100 }} />
              {
                index !== (totalCards - 1) &&
                <div style={{ height: 190, width: 2, position: 'absolute', marginTop: 20 }} />
              }
            </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="arrow-left" style={{ borderRight: `10px solid` }}></div>
                <div className="experience-card">
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div>
                      <h3 className="experience-card-title">{experience["title"]}</h3>
                      <p className="experience-card-company">
                        <a href={experience["company_url"]} target="_blank" rel="noopener noreferrer">
                          {experience["company"]}
                        </a>
                      </p>
                    </div>
                    <div>
                      <div className="experience-card-heading-right">
                        <p className="experience-card-duration">{experience["duration"]}</p>
                        <p className="experience-card-location">{experience["location"]}</p>
                      </div>
    
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 20, textAlign: 'left' }}>
                    <div
                      className="repo-description"  />
                    {experience["description"]}
                  </div>
    
                </div>
    
              </div>
          </div>
    
        );
    }
}

export default ExperienceCard;
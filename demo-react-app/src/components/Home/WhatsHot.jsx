import { useState } from 'react';

export default function WhatsHot({ whatsHotModules }) {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return (
    <div>
      <span className="sys-loader">
        <span className="sys-loader__icon">Loading popular modules…</span>
      </span>
    </div>
  );

  return (
    <div>
      <ul className="content">
        {/* list is empty if no popular modules are available */}
        {whatsHotModules.length === 0 && (
          <li className="content__row">
            <div className="content__link">
              <div className="content__details">
                <div className="content__text">
                  <div className="content__title">
                    No popular modules available.
                  </div>
                </div>
              </div>
            </div>
          </li>
        )}
        {/* list of popular modules */}
        {whatsHotModules.length > 0 && (
          whatsHotModules.map((academyModule) => {
            const key = academyModule.ModuleId;
            return (
              <li className="content__row" key={key}>
                <div className="content__link">
                  <div className="content__details">
                    <div className="image-wrapper">
                      <div className="image-background" style={{ backgroundImage: `url(${academyModule.ModuleThumbnailUrl})` }}></div>
                    </div>
                    <div className="content__text">
                      <div className="content__title">{academyModule.ModuleName}</div>
                      <div className="content__meta">
                        <span>{ academyModule.ModuleTypeDisplay }</span>
                        {academyModule.ModuleType !== 'modEvent' && academyModule.ModuleDuration !== '' && (
                          <span><i className="fal fa-clock"></i>{academyModule.ModuleDuration}</span>
                        )}
                        {academyModule.ModuleType === 'modEvent' && academyModule.EventTypeDisplay && (
                          <span>
                            {academyModule.ModuleDuration !== '' && <span className="bullet">•</span>}
                            {academyModule.EventType === 'face2face' && <i className="fal fa-users-class fa-fw"></i>}
                            {academyModule.EventType === 'webcast' && <i className="fal fal fa-desktop fa-fw"></i>}
                            {academyModule.EventTypeDisplay}
                          </span>
                        )}
                        <span>{academyModule.EventTypeDisplay}</span>
                        <span><i className="fal fa-thumbs-up"></i>{academyModule.ModuleLikeCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <i className="fal fa-arrow-right"></i>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
import React from 'react'
import HomeCardSectionProgresscircular from './HomeCardSectionProgresscircular'

export default function HomeSectionCircularprogress() {
  return (
    <div className="px-2 py-3 md:flex sm:flex">
      <HomeCardSectionProgresscircular
        titlecardsectionprogress="intuition"
        pourcentagecard="75%"
      />
      <HomeCardSectionProgresscircular
        titlecardsectionprogress="creativity"
        pourcentagecard="83%"
      />
      <HomeCardSectionProgresscircular
        titlecardsectionprogress="pure luck"
        pourcentagecard="25%"
      />
    </div>
  );
}

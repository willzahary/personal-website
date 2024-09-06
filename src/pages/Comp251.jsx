import React, { useState } from 'react'
import { EMAIL_251 } from '../links'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'

export const Comp251 = () => {

  const [copied, setCopied] = useState(false)

  return (
    <div className="comp251">
      <div className="comp251-text">
        <h1>Comp 251<span className="comp251-title">: Algorithms and Data Structures</span></h1>

        <h2>Contact</h2>
        <ul className="comp251-contact">
          <li>
            email: {EMAIL_251} <CopyToClipboard
                      className='link'
                      text={EMAIL_251}
                      onCopy={() => setCopied(true)}
                  >
                  <span>
                      { copied ? "[copied]" : "[copy]" }
                  </span>
                  </CopyToClipboard>
          </li>
          <li>
            will's office hours: friday 9-12 in mcconnell 312
          </li>
          <li>
            giulia's office hours: tba
          </li>
          <li>
            TA office hours: tba
          </li>
        </ul>

        <h2>General Info</h2>
        <ul className="comp251-info">
          <li>
            syllabus: <a href="comp251/files/syllabus.pdf">./files/syllabus.pdf</a>
          </li>
          <li>
            location: stewart biology, S1/4
          </li>
          <li>
            time: tuesday & thursday, 11:35 to 12:55
          </li>
        </ul>

        <h2>Lecture Notes</h2>
        <ul className="comp251-notes">
          <li>
            time complexity: available sept 10
          </li>
          <li>
            graphs and probability: available sept 12
          </li>
          <li>
            disjoint sets: available oct 1
          </li>
          <li>
            greedy algorithms: available oct 3
          </li>
          <li>
            graph algorithms: available oct 10
          </li>
          <li>
            divide and conquer: available nov 5
          </li>
          <li>
            dynamic programming: available nov 12
          </li>
          <li>
            network flows: available nov 26
          </li>
          <li>
            probabilistic analysis: available dec 3
          </li>
        </ul>

        <h2>Additional Exercises</h2>
        <ul className="comp251-exercises">
          <li>
            midterm 1 practice: available sept 24
          </li>
          <li>
            midterm 2 practice: available nov 5
          </li>
          <li>
            programming exercises: tba
          </li>
        </ul>
      </div>
    </div>
  )
}

import React from 'react'
import { Col } from 'react-bootstrap';

export default function TopDescription() {
    return (
        <>
          <Col lg={8} className="px-0">
            <p className="fs-4">
              You&apos;ve successfully loaded the Bootstrap + React example! It&apos;s loaded
              up with <a href="https://getbootstrap.com/">Bootstrap 5</a> and uses
              React and Next.js to compile and bundle our Sass. It also features a
              handful of custom React components built using{" "}
              <a href="https://react-bootstrap.github.io/">React Bootstrap</a>.
            </p>
            <p>
              If this button appears blue and the link appears purple, you&apos;ve done
              it!
            </p>
          </Col>
        </>
      );
}

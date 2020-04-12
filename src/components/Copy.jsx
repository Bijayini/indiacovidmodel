import React , {useEffect} from 'react';
export function useHotKey(
  keyToListen,
  handler,
  deps = [],
  disableOnInput = true,
) {
  React.useEffect(() => {
    const listener = ({ key }) => {
      // if active element is editable, do no execute handler when disableOnInput flag is set
      if (
        disableOnInput &&
        ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)
      ) {
        return;
      }

      if (key === keyToListen) {
        handler();
      }
    };

    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, deps);
}

// eslint-disable-next-line react/prop-types
export default function({ onClick }) {
  useHotKey('c', onClick);

  return (
    <>
      <svg onClick={onClick} className="copy-button" viewBox="0 0 15 15">
        <g xmlns="http://www.w3.org/2000/svg" id="content-copy">
          <path
            style={{ transform: 'scale(0.025)' }}
            d="M395.25,0h-306c-28.05,0-51,22.95-51,51v357h51V51h306V0z M471.75,102h-280.5c-28.05,0-51,22.95-51,51v357    c0,28.05,22.95,51,51,51h280.5c28.05,0,51-22.95,51-51V153C522.75,124.95,499.8,102,471.75,102z M471.75,510h-280.5V153h280.5V510    z"
          />
        </g>
      </svg>
      <style jsx="true" global="true">
        {`
          .copy-button {
            width: 15px;
            height: 15px;
            position: absolute;
            right: 15px;
            top: 15px;
            cursor: pointer;
            transition: all 150ms ease-in-out;
          }

          .copy-button:hover {
            background: black;
            padding: 3px;
            border-radius: 5px;
            fill: white;
          }

          @keyframes fade-up {
            0% {
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
            75% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(-120%);
            }
          }

          .tooltip {
            animation: fade-up 2s ease-in-out;
            animation-fill-mode: forwards;
            background: #cc1c5d;
            height: 10px;
            padding: 2px 8px;
            border-radius: 3px;
            color: white;
            font-family: monospace;
            font-size: 0.6em;
          }
        `}
      </style>
    </>
  );
}

export function showCopyTooltip() {
  const copyButtonRect = document
    .querySelector('.copy-button')
    .getBoundingClientRect();
  const tooltip = document.createElement('DIV');
  tooltip.innerText = 'JSON Copied!';
  tooltip.style.position = 'fixed';
  tooltip.style.top = `${copyButtonRect.top - 20}px`;
  tooltip.style.left = `${copyButtonRect.left}px`;
  tooltip.classList.add('tooltip');
  document.body.appendChild(tooltip);
  setTimeout(() => {
    document.body.removeChild(tooltip);
  }, 5000);
}

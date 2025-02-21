"use client";
type StackIconProps = {
  type: string;
  size?: number;
};

export default function StackIcon({ type, size = 20 }: StackIconProps) {
  return (
    <>
      {type === "Panda" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 256 259"
        >
          <path
            fill="#ededed"
            d="M0 29.642C0 13.272 13.271 0 29.642 0h196.716C242.728 0 256 13.271 256 29.642v199.41c0 16.372-13.271 29.643-29.642 29.643H29.642C13.272 258.695 0 245.424 0 229.052V29.642Z"
          />
          <path d="M164.056 57.825c-14.124-4.057-28.53-4.609-43.212-3.296c-8.216.854-16.114 2.485-23.732 5.347C80.644 66.06 68.28 76.774 60.908 92.904c-5.286 11.564-7.196 23.848-7.395 36.452c-.21 13.32 1.459 26.455 4.11 39.478c2.405 11.804 5.607 23.377 10.179 34.55c.434 1.06.975 1.418 2.135 1.416c14.461-.031 28.923-.031 43.385-.031h12.843c.328 0 .656-.019 1.033-.04c.192-.01.397-.021.622-.031c-.087-.207-.164-.397-.238-.575a20.39 20.39 0 0 0-.407-.953c-1.045-2.237-2.113-4.464-3.18-6.692c-2.316-4.832-4.63-9.664-6.724-14.591c-6.351-14.94-11.215-30.324-12.699-46.608c-.654-7.185-.564-14.329 1.43-21.33c2.278-8.003 7.168-13.652 15.274-16.014c7.445-2.168 14.993-2.154 22.396.24c6.608 2.137 10.916 6.65 12.748 13.408c1.408 5.19 1.407 10.436.343 15.669c-.82 4.028-2.47 7.705-5.441 10.645c-5.33 5.275-11.985 6.489-19.126 6.084c-1.27-.072-2.537-.21-3.842-.355c-.612-.066-1.231-.134-1.864-.197c.018.202.028.388.038.562c.018.343.034.64.104.925c.305 1.223.595 2.451.885 3.679c.699 2.958 1.397 5.915 2.295 8.81a169.782 169.782 0 0 0 6.14 16.654c16.577-1.294 31.843-5.414 48.047-15.141c.244-.154.465-.292.687-.43c6.96-4.333 12.593-9.954 16.478-17.213c6.291-11.754 7.518-24.324 5.649-37.299c-1.93-13.39-7.938-24.63-18.283-33.445c-7.174-6.115-15.47-10.12-24.474-12.706Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          {type === "Next" && (
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 15V9l7.745 10.65A9 9 0 1 1 19 17.657M15 12V9"
            />
          )}
          {type === "Notion" && (
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
              <path d="M7 7h3l6 6M8 7v10m-1 0h2m6-10h2" />
              <path d="M16 7v10h-1l-7-7" />
            </g>
          )}
          {type === "Tailwind" && (
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.667 6C9.177 6 7.623 7.222 7 9.667c.933-1.223 2.023-1.68 3.267-1.375c.71.174 1.217.68 1.778 1.24c.916.912 2 1.968 4.288 1.968c2.49 0 4.044-1.222 4.667-3.667c-.933 1.223-2.023 1.68-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24C15.039 7.056 13.98 6 11.667 6zm-4 6.5c-2.49 0-4.044 1.222-4.667 3.667c.933-1.223 2.023-1.68 3.267-1.375c.71.174 1.217.68 1.778 1.24c.916.912 1.975 1.968 4.288 1.968c2.49 0 4.044-1.222 4.667-3.667c-.933 1.223-2.023 1.68-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24c-.916-.912-1.975-1.968-4.288-1.968z"
            />
          )}
          {type === "Mantine" && (
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
              <path d="M11 16a4.97 4.97 0 0 0 2-4a5.01 5.01 0 0 0-2-4m3 1h-2m2 6h-2m-2-3h.01" />
            </g>
          )}
          {type === "Astro" && (
            <path
              fill="currentColor"
              d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944c.856 1.026 2.043 1.352 3.272 1.535c1.897.283 3.76.177 5.522-.678c.202-.098.388-.229.608-.36c.166.473.209.95.151 1.437c-.14 1.185-.738 2.1-1.688 2.794c-.38.277-.782.525-1.175.787c-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188a3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958c-.106-.769-.472-1.113-1.161-1.133c-.707-.02-1.267.411-1.415 1.09c-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614c.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z"
            />
          )}
        </svg>
      )}
    </>
  );
}

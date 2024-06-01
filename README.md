# React-JKCSS

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/167443241?s=200&v=4" /><br>
  Dynamic front-end development React support CSS framework
</p>

<hr>

## About React-JKCSS :heart:

- First Sri Lankan React support front-end development CSS framework
- - parallelly develop with [JKCSS](https://github.com/JKCSS-CSS-Framework) 
- This is the JKCSS components Build with React
- Dynamic front-end development CSS framework

## Quick Start Guide :computer:

- In Your React js Project
- open Terminal and install `@jehankandy/react-jkcss`

``` js

    npm i @jehankandy/react-jkcss

``` 

- follow up following code

``` jsx

import React from 'react'
import {ButtonBlue, ButtonRed, ButtonGray, ButtonGreen, ButtonInfo, ButtonYellow, ButtonCustom, BasicTable, BasicTableHover} from 'react-jkcss'


const ReactJK = () => {
  return (
    <div className="">
        <div>TesTing JKCSS REact</div>

        <ButtonBlue>
            Blue Button
        </ButtonBlue>
        <ButtonRed>
            Red Button
        </ButtonRed>
        <ButtonGray>
            Gray Button
        </ButtonGray>
        <ButtonGreen>
            Green Button
        </ButtonGreen>
        <ButtonInfo>
            Info Button
        </ButtonInfo>
        <ButtonYellow>
            Yellow Button
        </ButtonYellow>

        // custom button
        <ButtonCustom bgColor={"red"} textColor={"white"}>Custom Button</ButtonCustom>

        // tables

        <BasicTable columns={columns} data={data} />
        <BasicTableHover columns={columns} data={data} />

    </div>
  )
}

export default ReactJK

```

## Documentation :notebook:

| Component | Description |
|--------|--------|
| `<ButtonBlue> </ButtonBlue>` | Blue color Button |
| `<ButtonGray> </ButtonGray>` | Gray color Button |
| `<ButtonGreen> </ButtonGreen>` | Green color Button |
| `<ButtonInfo> </ButtonInfo>` | Info (LightBlue) color Button |
| `<ButtonRed> </ButtonRed>` | Red color Button |
| `<ButtonYellow> </ButtonYellow>` | Yellow color Button |
| `<ButtonCustom bgColor={"red"} textColor={"white"}>Custom Button</ButtonCustom>` | Custom Button |
| `<ButtonRed> </ButtonRed>` | Red color Button |
| `<BasicTable columns={columns} data={data} />` | BasicTable of JKCSS |
| `<BasicTableHover columns={columns} data={data} />` | BasicTable Hover of JKCSS |



## Versioning of the project :grey_question:

| Version | Description | Release Date|
|--------|--------|---------|
| v1.0.0 | initial release of the Project, Adding Butttons | 18 April 2024 |
| v1.1.0 | Updating Butttons, Adding tables | 16 May 2024 |

## Developers and Designers

- JehanKandy (BackendExpert)

## License Copyright

- The React-JKCSS is Licensed under [MIT](https://github.com/React-JKCSS/ReactJKCSS/blob/master/LICENSE)


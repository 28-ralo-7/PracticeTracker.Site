﻿declare module '*.scss' {
    const styles: { [className: string]: string };
    export default styles;
}

declare module '*.sass' {
    const styles: { [className: string]: string };
    export default styles;
}

declare module '*.css' {
    const styles: {[className: string]: string};
    export default styles;
}

declare module '*.png' {
    const content: string;
    export default content;
}
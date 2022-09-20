const fixClasses = (baseCls: string, extraCls: string) => {
    const classesBase = baseCls.split(' ');
    const classesExtra = extraCls.split(' ');
    let classNames = classesBase.join(' ');

    classesExtra.forEach((extra) => {
        const cls = extra.substring(0, 1) === '-' ? extra.substring(1) : extra;
        const prefix = cls.split('-')[0];
        const repeated = classesBase.find((c) => c.includes(`${prefix}-`));

        if (!repeated) {
            classNames = classNames.concat(classNames.length ? ' ' : '', extra);
        }
    });

    return classNames;
};

export default fixClasses;

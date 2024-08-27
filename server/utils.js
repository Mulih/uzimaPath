import moment from 'moment';

exports.formatProgress = (progress) => {
    if (!progress || progress.length === 0) {
        return 'No progress recorded';
    }

    const lastEntry = progress[progress.length - 1];
    const daysSinceLastEntry = Math.floor((Date.now() - lastEntry.getTime() / (1000 * 3600 * 24)));

    if (daysSinceLastEntry > 30) {
        return 'Not tracking regularly, last entry was ' + moment(lastEntry).fromNow();
    }

    const formattedProgress = '';

    progress.forEach((entry, index) => {
        const diff = moment(entry).fromNow();
        formattedProgress += `${diff}`;
        if (index < progress.length - 1) formattedProgress += '| ';
    });

    return formattedProgress;
};

exports.getGoalProgressPercentage = (goal) => {
    if (!goal.progress || goal.progress.length === 0) {
        return 0;
    }

    const lastEntry = goal.progress[goal.progress.length - 1];
    const daysSinceLastEntry = Math.floor((Date.now() - lastEntry.getTime() / (1000 * 3600 * 24)));


    if (daysSinceLastEntry <= 7) {
        return 100;
    }
    if (daysSinceLastEntry <= 14) {
        return 75;
    }
    if (daysSinceLastEntry <= 21) {
        return 50;
    }
    if (daysSinceLastEntry <= 28) {
        return 25;
    }

    return 0;

};

const goToObject = (objectId) => {
    $(`a[href='#${objectId}']`).get(0).click()
}

const goToStop = (stopId) => {
    $(`a[href='#${stopId}']`).get(0).click()
}

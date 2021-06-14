Array.prototype.take = function (count = 5) {
    this.splice(count);
    return this;
}

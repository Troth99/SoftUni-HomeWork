(function () {

    String.prototype.ensureStart = function(str) {
        if (!this.startsWith(str)) {
            return str + this.toString();
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
            return this.toString() + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function() {
        return this.length === 0;
    };

    String.prototype.truncate = function(n) {
        if (n <= 3) {
            return ".".repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        }

        let lastSpaceIndex = this.substring(0, n - 1).lastIndexOf(" ");

        if (lastSpaceIndex !== -1) {
            return this.substring(0, lastSpaceIndex) + "...";
        } else {
            return this.substring(0, n - 3) + "...";
        }
    };

    String.format = function(string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(new RegExp("\\{" + i + "\\}", "g"), params[i]);
        }
        return string;
    };

})();















let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
  console.log(str)

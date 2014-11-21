/**
 * Copyright 2014 wildbits org
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
app.models = app.models || {};

app.models.GearFactory = (function () {

    return {

        build: function (gear, diver) {
            var category = gear.category;
            switch (category) {
                case 'SUIT':
                    return new app.models.Suit(gear, diver);
                default:
                    return new app.models.Gear(gear);
            }
        }

    };

})();
import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'b086bd3496954120abab03ea6d2aad7a'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: 'b7fd5dc26f0441df9bccc3a6f0fde775'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'a9dcd6898cdf4f02b867c6f81945b9e4'
                    }
                    'x_502054_test/main': {
                        table: 'sys_ux_lib_asset'
                        id: '4791cdb4c7074f2dac0f2c651b4a5f32'
                    }
                    'x_502054_test/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'ab60cb2ebd854516a9ae12161c56c2ba'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '104e7cb231414a8da4cccef998af13c0'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'status'
                            value: 'on_hold'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '12bb113389d544a49c705387cf44b898'
                        key: {
                            category: 'x_502054_test_incident'
                            prefix: 'INC'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14a281af5e484ac9be4ce338e997cbcc'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1ef1610faedb45d1912420d67a0c2c85'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '22b98dac95bd4a5c9cee39a88339ab65'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d5e4e35385348af8539a6155c218d00'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3f1dc0aedcd14c6bba86000319511a22'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4063d629908048778ff30e047ab61f99'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '447ac8890f344e58ac7f817252f7dd40'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58e009a7cd654148b0c99816377c98f8'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58e4bc6ba34d49ec8adc7e6010af050e'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '600873b2d403462683be699e19e22975'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65fb9504cf274c16833902435c0ec1fb'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6da1bcc6c4cb4a44b7f8e71cc36f8b82'
                        key: {
                            name: 'x_502054_test_incident'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '75693436977c4bb294f0075049c5963e'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'priority'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '769861d319c744dda69d67e7ce390649'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '782d94566837414f9a23e3c7df3d001e'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7a795adb1d7449fbaf5743f9c98686a2'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7c1a40e3b3284ef7b1221a3514261668'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8903e08811d0480ab64527adde974355'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b14632eaeeb1430aaa742f9c69f25aaf'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ba549422bb464fe6b8a8aba0cfb0d4e1'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bfe9cc356b774188a13b678df4de1efc'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cadfc55fdb8247419e65264e1f84c4e7'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'priority'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd76ca9a397274ca6ad150fe718bfd410'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'priority'
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd935ad7209484fd5bd38be202439d8ee'
                        key: {
                            name: 'x_502054_test_incident'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db1c218564a14942b6b396f10102c58a'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'priority'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e441bc4c3727460bb693ce68e9abf07d'
                        key: {
                            name: 'x_502054_test_incident'
                            element: 'number'
                        }
                    },
                ]
            }
        }
    }
}
